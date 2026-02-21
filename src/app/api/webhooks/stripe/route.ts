import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';

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
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('[webhook] Signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.payment_status === 'paid') {
        sendTeamNotification(session);
      }
      break;
    }
    case 'checkout.session.async_payment_succeeded': {
      const session = event.data.object as Stripe.Checkout.Session;
      sendTeamNotification(session);
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

function sendTeamNotification(session: Stripe.Checkout.Session) {
  const { modelId, priceType, planTier, locale } = session.metadata ?? {};
  const customerEmail = session.customer_details?.email ?? 'N/A';
  const customerName = session.customer_details?.name ?? 'N/A';
  const amountTotal = session.amount_total
    ? (session.amount_total / 100).toFixed(2)
    : 'N/A';
  const currency = session.currency?.toUpperCase() ?? 'N/A';

  // TODO: Replace with Resend email notification when ready
  console.log('[NOVA VENDA] ==========================================');
  console.log(`Cliente:   ${customerName} <${customerEmail}>`);
  console.log(`Modelo:    ${modelId || '(sem modelo)'}`);
  console.log(`Tipo:      ${priceType} ${planTier ? `(${planTier})` : ''}`);
  console.log(`Valor:     ${currency} ${amountTotal}`);
  console.log(`Locale:    ${locale}`);
  console.log(`Sessão:    ${session.id}`);
  console.log('[/NOVA VENDA] =========================================');
}
