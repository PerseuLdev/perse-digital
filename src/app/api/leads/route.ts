import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { appendLead } from '@/lib/google-sheets';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      whatsapp,
      tier,
      modelId,
      locale,
    }: {
      name: string;
      email: string;
      whatsapp?: string;
      tier: string;
      modelId: string;
      locale: string;
    } = body;

    if (!name || !email || !tier || !locale) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, tier, locale' },
        { status: 400 },
      );
    }

    const timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const row = [timestamp, name, email, whatsapp ?? '', tier, modelId ?? '', locale, 'Lead'];

    // Save to Google Sheets (non-blocking — log error but don't fail)
    try {
      if (process.env.GOOGLE_SHEETS_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
        await appendLead(row);
      }
    } catch (sheetsErr) {
      console.error('[leads] Google Sheets append failed:', sheetsErr);
    }

    // Notify owner
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    if (notificationEmail) {
      try {
        const tierLabel = tier === 'essential' ? 'Essencial' : tier === 'professional' ? 'Profissional' : tier;
        await resend.emails.send({
          from: 'Perse Digital <onboarding@resend.dev>',
          to: notificationEmail,
          subject: `🔔 Novo lead — ${name} (${tierLabel})`,
          html: `
            <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#f9fafb;border-radius:12px">
              <h2 style="margin:0 0 24px;font-size:20px;color:#111">🔔 Novo lead capturado</h2>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Nome</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#111">${name}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">E-mail</td><td style="padding:8px 0;font-size:14px;color:#111">${email}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">WhatsApp</td><td style="padding:8px 0;font-size:14px;color:#111">${whatsapp || '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Modelo</td><td style="padding:8px 0;font-size:14px;color:#111">${modelId || '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Plano</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#111">${tierLabel}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Locale</td><td style="padding:8px 0;font-size:14px;color:#111">${locale}</td></tr>
              </table>
              <p style="margin:24px 0 0;font-size:12px;color:#9ca3af">${timestamp}</p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error('[leads] Failed to send owner notification:', emailErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : JSON.stringify(error);
    console.error('[leads] Error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
