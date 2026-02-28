import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';
import { Resend } from 'resend';
import { getMPClient } from '@/lib/mercadopago';
import { Payment } from 'mercadopago';

const resend = new Resend(process.env.RESEND_API_KEY);

const TIER_LABEL: Record<string, string> = {
  essential: 'Essencial',
  professional: 'Profissional',
};

const METHOD_LABEL: Record<string, string> = {
  pix: 'PIX',
  credit_card: 'Cartão de crédito',
  debit_card: 'Cartão de débito',
};

function verifySignature(request: NextRequest, rawBody: string, dataId: string): boolean {
  const secret = process.env.MP_WEBHOOK_SECRET;
  if (!secret) return true; // skip verification if not configured (dev)

  const xSignature = request.headers.get('x-signature');
  const xRequestId = request.headers.get('x-request-id');

  if (!xSignature || !xRequestId) return false;

  // Parse ts and v1 from "ts=...,v1=..."
  const parts = Object.fromEntries(
    xSignature.split(',').map((p) => p.split('=') as [string, string]),
  );
  const ts = parts['ts'];
  const v1 = parts['v1'];
  if (!ts || !v1) return false;

  const template = `id:${dataId};request-id:${xRequestId};ts:${ts}`;
  const hash = createHmac('sha256', secret).update(template).digest('hex');

  return hash === v1;
}

export async function POST(request: NextRequest) {
  const body = await request.text();

  let notification: { type?: string; action?: string; data?: { id?: string } };
  try {
    notification = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const dataId = notification.data?.id ?? '';

  if (!verifySignature(request, body, dataId)) {
    console.error('[mp-webhook] Signature verification failed');
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Only handle payment notifications
  if (notification.type !== 'payment' || !dataId) {
    return NextResponse.json({ received: true });
  }

  try {
    const payment = await new Payment(getMPClient()).get({ id: Number(dataId) });

    if (payment.status === 'approved') {
      await notifyTeam(payment);
    }
  } catch (err: unknown) {
    // 404 = payment doesn't exist (e.g. MP test notifications with fake IDs)
    const status = (err as { status?: number })?.status;
    if (status === 404) {
      console.log(`[mp-webhook] Payment ${dataId} not found (test notification), skipping`);
      return NextResponse.json({ received: true });
    }
    console.error('[mp-webhook] Failed to fetch payment:', err);
    return NextResponse.json({ error: 'Failed to process payment' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

async function notifyTeam(payment: Awaited<ReturnType<Payment['get']>>) {
  const [tier, modelId] = (payment.external_reference ?? '').split('|');
  const customerEmail = payment.payer?.email ?? 'N/A';
  const customerName = [payment.payer?.first_name, payment.payer?.last_name]
    .filter(Boolean)
    .join(' ') || 'N/A';

  const amount = (payment.transaction_amount ?? 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const tierLabel = TIER_LABEL[tier ?? ''] ?? tier ?? 'N/A';
  const rawMethod = payment.payment_type_id === 'bank_transfer' ? 'pix' : (payment.payment_type_id ?? '');
  const methodLabel = METHOD_LABEL[rawMethod] ?? rawMethod ?? 'N/A';
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!notificationEmail) {
    console.warn('[mp-webhook] NOTIFICATION_EMAIL not configured');
    return;
  }

  try {
    await resend.emails.send({
      from: 'Perse Digital <onboarding@resend.dev>',
      to: notificationEmail,
      subject: `🎉 Nova venda — ${tierLabel} (${modelId || 'sem modelo'})`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#f9fafb;border-radius:12px">
          <h2 style="margin:0 0 24px;font-size:20px;color:#111">🎉 Nova venda confirmada</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Cliente</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#111">${customerName}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">E-mail</td><td style="padding:8px 0;font-size:14px;color:#111">${customerEmail}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Modelo</td><td style="padding:8px 0;font-size:14px;color:#111">${modelId || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Plano</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#111">${tierLabel}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Pagamento</td><td style="padding:8px 0;font-size:14px;color:#111">${methodLabel}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Valor</td><td style="padding:8px 0;font-size:18px;font-weight:700;color:#16a34a">${amount}</td></tr>
          </table>
          <p style="margin:24px 0 0;font-size:12px;color:#9ca3af">Pagamento MP: ${payment.id}</p>
        </div>
      `,
    });
  } catch (err) {
    console.error('[mp-webhook] Failed to send email:', err);
  }
}
