import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { getStripePriceId, type PlanTier } from '@/lib/stripe-prices';
import { getMPPreference } from '@/lib/mercadopago';
import { BRL_PRICES, TIER_LABELS_PT, type PaymentMethod } from '@/lib/prices';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      modelId,
      tier,
      paymentMethod,
      locale,
    }: {
      modelId?: string;
      tier: PlanTier;
      paymentMethod?: PaymentMethod;
      locale: string;
    } = body;

    if (!tier || !locale) {
      return NextResponse.json(
        { error: 'Missing required fields: tier, locale' },
        { status: 400 },
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

    // pt → Mercado Pago
    if (locale === 'pt') {
      const method: PaymentMethod = paymentMethod ?? 'card';
      const unitPrice = BRL_PRICES[tier][method];
      const title = TIER_LABELS_PT[tier];

      const preference = await getMPPreference().create({
        body: {
          items: [
            {
              id: tier,
              title,
              quantity: 1,
              unit_price: unitPrice,
              currency_id: 'BRL',
            },
          ],
          payment_methods: {
            excluded_payment_types: method === 'pix'
              ? [{ id: 'credit_card' }, { id: 'debit_card' }]
              : [{ id: 'bank_transfer' }],
            excluded_payment_methods: [],
            installments: method === 'card' ? 12 : 1,
          },
          external_reference: `${tier}|${modelId ?? ''}`,
          back_urls: {
            success: `${baseUrl}/checkout/success`,
            failure: `${baseUrl}/checkout/cancel`,
            pending: `${baseUrl}/checkout/success`,
          },
          ...(baseUrl.startsWith('https') && { auto_return: 'approved' }),
        },
      });

      if (!preference.init_point) {
        return NextResponse.json({ error: 'Mercado Pago did not return a checkout URL' }, { status: 500 });
      }

      return NextResponse.json({ url: preference.init_point });
    }

    // en (and any other locale) → Stripe USD
    const priceId = getStripePriceId(tier);

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price not configured for this combination' },
        { status: 500 },
      );
    }

    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      payment_method_types: ['card'],
      success_url: `${baseUrl}/en/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/en/checkout/cancel`,
      metadata: {
        modelId: modelId ?? '',
        tier,
        locale,
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: 'Stripe did not return a checkout URL' }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : JSON.stringify(error);
    console.error('[checkout] Error creating session:', message);
    return NextResponse.json(
      { error: message },
      { status: 500 },
    );
  }
}
