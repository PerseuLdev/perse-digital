import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import {
  getCurrencyForLocale,
  getPaymentMethodsForCurrency,
  getSetupPriceId,
  getSubscriptionPriceId,
  type PlanTier,
} from '@/lib/stripe-prices';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      modelId,
      priceType,
      planTier,
      locale,
    }: {
      modelId?: string;
      priceType: 'setup' | 'subscription';
      planTier?: PlanTier;
      locale: string;
    } = body;

    if (!priceType || !locale) {
      return NextResponse.json(
        { error: 'Missing required fields: priceType, locale' },
        { status: 400 },
      );
    }

    if (priceType === 'subscription' && !planTier) {
      return NextResponse.json(
        { error: 'Missing planTier for subscription' },
        { status: 400 },
      );
    }

    const currency = getCurrencyForLocale(locale);
    const paymentMethodTypes = getPaymentMethodsForCurrency(currency);

    let priceId: string | undefined;
    let mode: 'payment' | 'subscription';

    if (priceType === 'setup') {
      priceId = getSetupPriceId(currency);
      mode = 'payment';
    } else {
      priceId = getSubscriptionPriceId(planTier!, currency);
      mode = 'subscription';
    }

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price not configured for this combination' },
        { status: 500 },
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
    const localePrefix = locale === 'pt' ? '' : `/${locale}`;

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      payment_method_types: paymentMethodTypes as Stripe.Checkout.SessionCreateParams['payment_method_types'],
      success_url: `${baseUrl}${localePrefix}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}${localePrefix}/checkout/cancel`,
      metadata: {
        modelId: modelId ?? '',
        priceType,
        planTier: planTier ?? '',
        locale,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('[checkout] Error creating session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 },
    );
  }
}
