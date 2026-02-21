export type Currency = 'BRL' | 'USD';
export type PlanTier = 'essential' | 'professional' | 'elite';

export function getCurrencyForLocale(locale: string): Currency {
  return locale === 'pt' ? 'BRL' : 'USD';
}

export function getPaymentMethodsForCurrency(currency: Currency): string[] {
  if (currency === 'BRL') return ['card', 'pix', 'boleto'];
  return ['card'];
}

export function getSetupPriceId(currency: Currency): string | undefined {
  const key = `STRIPE_PRICE_SETUP_${currency}` as keyof NodeJS.ProcessEnv;
  return process.env[key];
}

export function getSubscriptionPriceId(
  tier: PlanTier,
  currency: Currency,
): string | undefined {
  const key =
    `STRIPE_PRICE_${tier.toUpperCase()}_${currency}` as keyof NodeJS.ProcessEnv;
  return process.env[key];
}
