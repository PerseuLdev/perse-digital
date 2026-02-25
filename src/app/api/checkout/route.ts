import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getStripe } from '@/lib/stripe';
import {
  getCurrencyForLocale,
  getPaymentMethodsForCurrency,
  getPriceId,
  type PlanTier,
  type BrlPaymentMethod,
} from '@/lib/stripe-prices';

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
      paymentMethod?: BrlPaymentMethod;
      locale: string;
    } = body;

    if (!tier || !locale) {
      return NextResponse.json(
        { error: 'Missing required fields: tier, locale' },
        { status: 400 },
      );
    }

    const currency = getCurrencyForLocale(locale);
    const brlMethod: BrlPaymentMethod = currency === 'BRL' ? (paymentMethod ?? 'card') : 'card';
    const paymentMethodTypes = getPaymentMethodsForCurrency(currency, brlMethod);
    const priceId = getPriceId(tier, currency, brlMethod);

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price not configured for this combination' },
        { status: 500 },
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
    const localePrefix = locale === 'pt' ? '' : `/${locale}`;

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      payment_method_types: paymentMethodTypes as Stripe.Checkout.SessionCreateParams['payment_method_types'],
      success_url: `${baseUrl}${localePrefix}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}${localePrefix}/checkout/cancel`,
      metadata: {
        modelId: modelId ?? '',
        tier,
        paymentMethod: brlMethod,
        locale,
      },
    };

    // Habilita parcelamento em até 12x para cartão BRL
    if (currency === 'BRL' && brlMethod === 'card') {
      sessionParams.payment_method_options = {
        card: {
          installments: { enabled: true },
        },
      };
    }

    const session = await getStripe().checkout.sessions.create(sessionParams);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('[checkout] Error creating session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 },
    );
  }
}
