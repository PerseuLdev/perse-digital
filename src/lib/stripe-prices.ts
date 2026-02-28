export type PlanTier = 'essential' | 'professional';

export function getStripePriceId(tier: PlanTier): string | undefined {
  return process.env[`STRIPE_PRICE_${tier.toUpperCase()}_USD`];
}
