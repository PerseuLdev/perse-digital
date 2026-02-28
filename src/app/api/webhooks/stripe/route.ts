import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { getStripe } from '@/lib/stripe';

const resend = new Resend(process.env.RESEND_API_KEY);

const TIER_LABEL: Record<string, string> = {
  essential: 'Essencial',
  professional: 'Profissional',
};

const METHOD_LABEL: Record<string, string> = {
  pix: 'PIX',
  card: 'Cartão de crédito',
};

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature' }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('[webhook] STRIPE_WEBHOOK_SECRET not configured');
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('[webhook] Signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.payment_status === 'paid') {
        await notifyTeam(session);
      }
      break;
    }
    case 'checkout.session.async_payment_succeeded': {
      const session = event.data.object as Stripe.Checkout.Session;
      await notifyTeam(session);
      break;
    }
    case 'checkout.session.async_payment_failed': {
      const session = event.data.object as Stripe.Checkout.Session;
      console.warn('[webhook] Async payment failed:', {
        sessionId: session.id,
        customerEmail: session.customer_details?.email,
        modelId: session.metadata?.modelId,
      });
      break;
    }
    default:
      console.log(`[webhook] Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

async function notifyTeam(session: Stripe.Checkout.Session) {
  const { tier, paymentMethod, modelId, locale, buyerName } = session.metadata ?? {};
  const customerEmail = session.customer_details?.email ?? 'N/A';
  const customerName = session.customer_details?.name ?? buyerName ?? 'N/A';
  const currency = session.currency?.toUpperCase() ?? 'USD';
  const amount = session.amount_total
    ? (session.amount_total / 100).toLocaleString(locale === 'pt' ? 'pt-BR' : 'en-US', {
        style: 'currency',
        currency,
      })
    : 'N/A';

  const tierLabel = TIER_LABEL[tier ?? ''] ?? tier ?? 'N/A';
  const methodLabel = METHOD_LABEL[paymentMethod ?? ''] ?? paymentMethod ?? 'N/A';
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!notificationEmail) {
    console.warn('[webhook] NOTIFICATION_EMAIL not configured');
    return;
  }

  const sharedRows = `
    <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Customer</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#111">${customerName}</td></tr>
    <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Email</td><td style="padding:8px 0;font-size:14px;color:#111">${customerEmail}</td></tr>
    <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Model</td><td style="padding:8px 0;font-size:14px;color:#111">${modelId || '—'}</td></tr>
    <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Plan</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#111">${tierLabel}</td></tr>
    <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Payment</td><td style="padding:8px 0;font-size:14px;color:#111">${methodLabel}</td></tr>
    <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Amount</td><td style="padding:8px 0;font-size:18px;font-weight:700;color:#16a34a">${amount}</td></tr>
  `;

  const emailPromises: Promise<unknown>[] = [];

  // Notify owner
  emailPromises.push(
    resend.emails.send({
      from: 'Perse Digital <onboarding@resend.dev>',
      to: notificationEmail,
      subject: `🎉 Nova venda — ${tierLabel} (${modelId || 'sem modelo'})`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#f9fafb;border-radius:12px">
          <h2 style="margin:0 0 24px;font-size:20px;color:#111">🎉 Nova venda confirmada</h2>
          <table style="width:100%;border-collapse:collapse">${sharedRows}</table>
          <p style="margin:24px 0 0;font-size:12px;color:#9ca3af">Sessão Stripe: ${session.id}</p>
        </div>
      `,
    }),
  );

  // Send receipt to buyer (only if we have a real email)
  if (customerEmail && customerEmail !== 'N/A') {
    const firstName = (session.customer_details?.name ?? buyerName ?? '').split(' ')[0] || 'there';
    const isPT = locale === 'pt';
    emailPromises.push(
      resend.emails.send({
        from: 'Perse Digital <onboarding@resend.dev>',
        to: customerEmail,
        subject: isPT
          ? 'Seu pagamento foi confirmado — Perse Digital'
          : 'Your payment was confirmed — Perse Digital',
        html: isPT
          ? `
            <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#f9fafb;border-radius:12px">
              <h2 style="margin:0 0 8px;font-size:20px;color:#111">Pagamento confirmado! 🎉</h2>
              <p style="margin:0 0 24px;font-size:14px;color:#6b7280">Olá, ${firstName}! Recebemos o seu pagamento com sucesso.</p>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Plano</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#111">${tierLabel}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Modelo</td><td style="padding:8px 0;font-size:14px;color:#111">${modelId || '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Valor pago</td><td style="padding:8px 0;font-size:18px;font-weight:700;color:#16a34a">${amount}</td></tr>
              </table>
              <div style="margin:24px 0;padding:16px;background:#eff6ff;border-radius:8px;border-left:3px solid #3b82f6">
                <p style="margin:0;font-size:14px;color:#1e40af;font-weight:600">Próximos passos</p>
                <p style="margin:8px 0 0;font-size:13px;color:#1d4ed8">Nossa equipe entrará em contato em breve pelo WhatsApp para solicitar seu Brandkit e iniciar o desenvolvimento.</p>
              </div>
              <p style="margin:24px 0 0;font-size:12px;color:#9ca3af">Perse Digital · Sessão: ${session.id}</p>
            </div>
          `
          : `
            <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#f9fafb;border-radius:12px">
              <h2 style="margin:0 0 8px;font-size:20px;color:#111">Payment confirmed! 🎉</h2>
              <p style="margin:0 0 24px;font-size:14px;color:#6b7280">Hi ${firstName}! We've received your payment successfully.</p>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Plan</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#111">${tierLabel}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Model</td><td style="padding:8px 0;font-size:14px;color:#111">${modelId || '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Amount paid</td><td style="padding:8px 0;font-size:18px;font-weight:700;color:#16a34a">${amount}</td></tr>
              </table>
              <div style="margin:24px 0;padding:16px;background:#eff6ff;border-radius:8px;border-left:3px solid #3b82f6">
                <p style="margin:0;font-size:14px;color:#1e40af;font-weight:600">Next steps</p>
                <p style="margin:8px 0 0;font-size:13px;color:#1d4ed8">Our team will reach out shortly via WhatsApp to request your Brandkit and kick off development.</p>
              </div>
              <p style="margin:24px 0 0;font-size:12px;color:#9ca3af">Perse Digital · Session: ${session.id}</p>
            </div>
          `,
      }),
    );
  }

  try {
    await Promise.all(emailPromises);
  } catch (err) {
    console.error('[webhook] Failed to send Resend email:', err);
  }
}
