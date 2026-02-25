export type Currency = 'BRL' | 'USD';
export type PlanTier = 'essential' | 'professional';
export type BrlPaymentMethod = 'pix' | 'card';

export function getCurrencyForLocale(locale: string): Currency {
  return locale === 'pt' ? 'BRL' : 'USD';
}

export function getPaymentMethodsForCurrency(
  currency: Currency,
  brlMethod?: BrlPaymentMethod,
): string[] {
  if (currency === 'BRL') {
    return brlMethod === 'pix' ? ['pix'] : ['card'];
  }
  return ['card'];
}

export function getPriceId(
  tier: PlanTier,
  currency: Currency,
  brlMethod?: BrlPaymentMethod,
): string | undefined {
  if (currency === 'USD') {
    return process.env[`STRIPE_PRICE_${tier.toUpperCase()}_USD`];
  }
  const method = (brlMethod ?? 'card').toUpperCase();
  return process.env[`STRIPE_PRICE_${tier.toUpperCase()}_${method}_BRL`];
}
