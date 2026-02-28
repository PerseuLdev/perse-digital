'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, ShieldCheck, Zap, Globe, Crown, MessageCircle, FileText, ArrowLeft, CreditCard, QrCode, User, Mail, Phone } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { BrandkitExplainer } from './brandkit-explainer';
import { Model } from '@/components/sections/model-card';
import type { Tier } from '@/contexts/tier-context';

const TIER_DATA = {
  essential: {
    priceBRL: 690,
    anchorBRL: 999,
    pixBRL: 620,
    priceUSD: 497,
    anchorUSD: 697,
    pixDiscount: '-10%',
    isCustom: false,
  },
  professional: {
    priceBRL: 1800,
    anchorBRL: 2499,
    pixBRL: 1620,
    priceUSD: 997,
    anchorUSD: 1397,
    pixDiscount: '-10%',
    isCustom: false,
  },
  premium: {
    isCustom: true,
    priceBRL: null,
    anchorBRL: null,
    pixBRL: null,
    priceUSD: null,
    anchorUSD: null,
    pixDiscount: null,
  },
} as const;

// How many of the 5 default service features are unlocked (green) for each tier
const TIER_UNLOCKED_FEATURES: Record<Tier, number> = {
  essential: 3,
  professional: 5,
  premium: 5,
};

interface SalesContentProps {
  model: Model;
  selectedTier?: Tier;
  onTierChange?: (tier: Tier) => void;
}

export function SalesContent({ model, selectedTier = 'essential', onTierChange }: SalesContentProps) {
  const t = useTranslations('sales');
  const tm = useTranslations(`models.items.${model.id}`);
  const locale = useLocale();

  const [isLoading, setIsLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState<{ name: string; email: string; whatsapp: string } | null>(null);
  const [showContract, setShowContract] = useState(false);
  const [contractAccepted, setContractAccepted] = useState(false);
  const [paymentMethodChoice, setPaymentMethodChoice] = useState<'card' | 'pix'>('card');
  const tier = TIER_DATA[selectedTier];

  const currencySymbol = t('pricing.currencySymbol');
  const isPT = locale === 'pt';

  function formatPrice(value: number) {
    return isPT
      ? value.toLocaleString('pt-BR')
      : value.toLocaleString('en-US');
  }

  const price = isPT ? tier.priceBRL : tier.priceUSD;
  const anchor = isPT ? tier.anchorBRL : tier.anchorUSD;
  const pixPrice = isPT ? tier.pixBRL : null;
  const effectivePrice = paymentMethodChoice === 'pix' && isPT && pixPrice != null ? pixPrice : price;

  const contractHref = isPT ? '/terms' : '/en/terms';

  const handleBuyClick = () => {
    setShowLeadForm(true);
  };

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      whatsapp: (form.elements.namedItem('whatsapp') as HTMLInputElement).value.trim(),
    };
    setLeadData(data);
    setShowLeadForm(false);
    setContractAccepted(false);
    setShowContract(true);

    // Fire-and-forget — don't block UX
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, tier: selectedTier, modelId: model.id, locale }),
    }).catch((err) => console.error('[leads] POST failed:', err));
  };

  const handleConfirmCheckout = async () => {
    setIsLoading(true);
    setShowContract(false);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          modelId: model.id,
          tier: selectedTier,
          paymentMethod: isPT ? paymentMethodChoice : 'card',
          locale,
          email: leadData?.email,
          name: leadData?.name,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Checkout failed');
      if (!data.url) throw new Error('No checkout URL returned');
      window.location.href = data.url;
    } catch (err) {
      console.error('[checkout] Error:', err);
      const message = t('whatsappFallback', { modelTitle: tm('title'), tierLabel: t(`tiers.${selectedTier}`) });
      window.open(`https://wa.me/5514991071072?text=${encodeURIComponent(message)}`, '_blank');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePremiumCTA = () => {
    const message = t('whatsappPremium', { modelTitle: tm('title') });
    window.open(`https://wa.me/5514991071072?text=${encodeURIComponent(message)}`, '_blank');
  };

  const unlockedFeatures = TIER_UNLOCKED_FEATURES[selectedTier];

  return (
    <div className="relative flex flex-col h-full overflow-y-auto px-6 py-8 space-y-8 custom-scrollbar">

      {/* Lead capture modal */}
      <AnimatePresence>
        {showLeadForm && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="absolute inset-0 z-50 flex flex-col bg-white px-6 py-8 space-y-6"
          >
            <button
              onClick={() => setShowLeadForm(false)}
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('leadForm.back')}
            </button>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">{t('leadForm.title')}</h3>
              <p className="text-sm text-slate-500">{t('leadForm.subtitle')}</p>
            </div>

            <form onSubmit={handleLeadSubmit} className="flex flex-col gap-4 flex-1">
              <label className="flex flex-col gap-1.5">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    name="name"
                    type="text"
                    required
                    defaultValue={leadData?.name ?? ''}
                    placeholder={t('leadForm.namePlaceholder')}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-1.5">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    name="email"
                    type="email"
                    required
                    defaultValue={leadData?.email ?? ''}
                    placeholder={t('leadForm.emailPlaceholder')}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-1.5">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    name="whatsapp"
                    type="tel"
                    defaultValue={leadData?.whatsapp ?? ''}
                    placeholder={t('leadForm.whatsappPlaceholder')}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition"
                  />
                </div>
              </label>

              <div className="sticky bottom-0 pt-4 pb-2 bg-gradient-to-t from-white via-white/90 to-transparent mt-auto">
                <Button
                  type="submit"
                  className="w-full bg-royal hover:bg-royal-dark text-white h-14 rounded-2xl text-base font-bold shadow-lg shadow-royal/15 hover:shadow-royal/25 transition-colors"
                >
                  {t('leadForm.cta')}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contract modal */}
      <AnimatePresence>
        {showContract && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="absolute inset-0 z-50 flex flex-col bg-white px-6 py-8 space-y-6"
          >
            <button
              onClick={() => setShowContract(false)}
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('contract.back')}
            </button>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">{t('contract.title')}</h3>
              <p className="text-sm text-slate-500">{t('contract.subtitle')}</p>
            </div>

            <ul className="space-y-3">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  {t(`contract.items.${i}` as Parameters<typeof t>[0])}
                </li>
              ))}
            </ul>

            <a
              href={contractHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-royal hover:underline font-medium"
            >
              <FileText className="w-4 h-4" />
              {t('contract.pdfLink')}
            </a>

            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={contractAccepted}
                onChange={(e) => setContractAccepted(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-royal cursor-pointer"
              />
              <span className="text-sm text-slate-700">
                {t('contract.checkboxLabel')}
              </span>
            </label>

            <div className="sticky bottom-0 pt-4 pb-2 bg-gradient-to-t from-white via-white/90 to-transparent mt-auto">
              <Button
                onClick={handleConfirmCheckout}
                disabled={!contractAccepted || isLoading}
                className="w-full bg-royal hover:bg-royal-dark text-white h-14 rounded-2xl text-base font-bold shadow-lg shadow-royal/15 hover:shadow-royal/25 transition-colors disabled:opacity-40"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t('contract.redirecting')}
                  </span>
                ) : (
                  t('contract.cta')
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="space-y-5">
        {/* Delivery badge */}
        <div className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px] uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/80">
          <Zap className="w-3 h-3" />
          {t('deliveryTime')}
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h2 className="text-[1.75rem] font-black text-slate-900 tracking-tighter leading-[1.15]">
            {tm('title')}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-[52ch]">
            {tm('description')}
          </p>
        </div>

        {/* Tier selector */}
        {onTierChange && (
          <div className="flex gap-1 p-1 bg-slate-100/80 rounded-xl relative">
            {(Object.keys(TIER_DATA) as Tier[]).map((key) => {
              const isActive = selectedTier === key;
              return (
                <button
                  key={key}
                  onClick={() => onTierChange(key)}
                  className={`flex-1 relative py-2 px-1 rounded-lg text-[11px] font-bold tracking-wide z-10 transition-colors duration-200 ${
                    isActive
                      ? key === 'premium'
                        ? 'text-zinc-900'
                        : 'text-slate-900'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="salesActiveTier"
                      className={`absolute inset-0 rounded-lg -z-10 shadow-sm ${
                        key === 'premium' ? 'bg-amber-500 shadow-amber-300/40' : 'bg-white'
                      }`}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                  {t(`tiers.${key}` as Parameters<typeof t>[0])}
                </button>
              );
            })}
          </div>
        )}

        {/* Pricing block */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTier}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="w-full"
          >
            {tier.isCustom ? (
              /* Premium — custom project */
              <div className="relative overflow-hidden p-6 rounded-2xl bg-amber-50/60 backdrop-blur-xl border border-amber-200/50 shadow-[0_4px_24px_-8px_rgba(245,158,11,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 to-transparent pointer-events-none" />
                <div className="relative space-y-3">
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-amber-600" />
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest">{t('premium.badge')}</span>
                  </div>
                  <div>
                    <p className="text-xs text-amber-700/60 font-medium mb-0.5">{t('premium.from')}</p>
                    <span className="text-5xl font-black text-amber-700 tracking-tighter">{t('premium.price')}</span>
                  </div>
                  <p className="text-sm text-amber-800/80 leading-relaxed">
                    {t('premium.description')}
                  </p>
                  <div className="flex items-center gap-2 text-amber-700/70 text-xs pt-3 border-t border-amber-200/60">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{t('premium.guarantee')}</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Essential / Professional */
              <div className="relative overflow-hidden p-6 rounded-2xl bg-white border border-slate-200 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]">
                <div className="relative space-y-4">
                  {/* Anchor price */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wide font-medium">{t('pricing.from')}</span>
                    <span className="text-base font-semibold text-slate-300 line-through">
                      {currencySymbol} {formatPrice(anchor!)}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs font-medium text-slate-400">{t('pricing.for')}</span>
                    <span className={`text-5xl font-black tracking-tighter transition-colors ${paymentMethodChoice === 'pix' && isPT ? 'text-emerald-600' : 'text-royal'}`}>
                      {currencySymbol} {formatPrice(effectivePrice!)}
                    </span>
                  </div>

                  {/* Payment method selector — BRL only */}
                  {isPT && (
                    <div className="space-y-2 pt-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Forma de pagamento</p>

                      {/* Card */}
                      <button
                        onClick={() => setPaymentMethodChoice('card')}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all ${paymentMethodChoice === 'card' ? 'border-royal bg-royal/5' : 'border-slate-100 hover:border-slate-200'}`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${paymentMethodChoice === 'card' ? 'border-royal' : 'border-slate-300'}`}>
                          {paymentMethodChoice === 'card' && <div className="w-2 h-2 rounded-full bg-royal" />}
                        </div>
                        <CreditCard className="w-4 h-4 text-slate-400 shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-slate-900">R$ {formatPrice(price!)}</p>
                          <p className="text-[11px] text-slate-400">em até 12x no cartão</p>
                        </div>
                      </button>

                      {/* PIX */}
                      <button
                        onClick={() => setPaymentMethodChoice('pix')}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all ${paymentMethodChoice === 'pix' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-100 hover:border-slate-200'}`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${paymentMethodChoice === 'pix' ? 'border-emerald-500' : 'border-slate-300'}`}>
                          {paymentMethodChoice === 'pix' && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                        </div>
                        <QrCode className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-emerald-900">R$ {formatPrice(pixPrice!)}</p>
                          <p className="text-[11px] text-emerald-700/70">Pix à vista</p>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold tracking-wide shrink-0">
                          {tier.pixDiscount}
                        </span>
                      </button>
                    </div>
                  )}

                  {/* Guarantee */}
                  <div className="flex items-center gap-2 text-slate-400 text-xs pt-3 border-t border-slate-100">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{t('pricing.guarantee')}</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* What's included */}
      <div className="space-y-3">
        <h3 className="text-[11px] font-bold text-slate-400 flex items-center gap-2 uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5 text-royal" />
          {t('whatsIncluded')}
        </h3>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTier}
            className="divide-y divide-slate-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {/* Model-specific features */}
            {Object.keys(tm.raw('features') || {}).map((key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="flex items-center gap-3 py-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{tm(`features.${key}`)}</span>
              </motion.div>
            ))}

            {/* Default service features — uses model-specific locked sections when available */}
            {(() => {
              const modelLockedSections = tm.raw('lockedSections') as Record<string, string> | null | undefined;
              const allUnlocked = selectedTier !== 'essential';

              if (modelLockedSections && Object.keys(modelLockedSections).length > 0) {
                return (
                  <>
                    {/* First 3 service features — always included */}
                    {Array.from({ length: 3 }, (_, i) => (
                      <motion.div
                        key={`def-${i}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 24, delay: i * 0.04 }}
                        className="flex items-center gap-3 py-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                        <span className="text-sm font-medium text-slate-700">
                          {t(`features.${i}` as Parameters<typeof t>[0])}
                        </span>
                      </motion.div>
                    ))}
                    {/* Model-specific locked sections — gray for Essential, green for Professional/Premium */}
                    {Object.keys(modelLockedSections).map((key, i) => (
                      <motion.div
                        key={`locked-${i}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 24, delay: (3 + i) * 0.04 }}
                        className="flex items-center gap-3 py-2.5"
                      >
                        <CheckCircle2 className={`w-4 h-4 shrink-0 transition-colors duration-300 ${allUnlocked ? 'text-emerald-500' : 'text-slate-300'}`} />
                        <span className={`text-sm transition-colors duration-300 ${allUnlocked ? 'font-medium text-slate-700' : 'text-slate-400'}`}>
                          {tm(`lockedSections.${key}`)}
                        </span>
                      </motion.div>
                    ))}
                  </>
                );
              }

              // Fallback: generic features with tier-based unlocking
              return Array.from({ length: 5 }, (_, i) => {
                const unlocked = i < unlockedFeatures;
                return (
                  <motion.div
                    key={`def-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24, delay: i * 0.04 }}
                    className="flex items-center gap-3 py-2.5"
                  >
                    <CheckCircle2 className={`w-4 h-4 shrink-0 transition-colors duration-300 ${unlocked ? 'text-emerald-500' : 'text-slate-300'}`} />
                    <span className={`text-sm transition-colors duration-300 ${unlocked ? 'font-medium text-slate-700' : 'text-slate-400'}`}>
                      {t(`features.${i}` as Parameters<typeof t>[0])}
                    </span>
                  </motion.div>
                );
              });
            })()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Domain Notice */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100/80">
        <Globe className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
        <p className="text-xs leading-relaxed text-amber-800/80">{t('domainNotice')}</p>
      </div>

      <div className="border-t border-slate-100" />

      {/* Brandkit Explainer */}
      {!tier.isCustom && <BrandkitExplainer />}

      {/* CTA Button */}
      <div className="sticky bottom-0 pt-4 pb-2 bg-gradient-to-t from-white via-white/90 to-transparent">
        {tier.isCustom ? (
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handlePremiumCTA}
              className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-900 h-14 rounded-2xl text-base font-bold shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t('ctaPremium')}
            </Button>
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: isLoading ? 1 : 1.02 }} whileTap={{ scale: isLoading ? 1 : 0.98 }}>
            <Button
              onClick={handleBuyClick}
              disabled={isLoading}
              className="w-full bg-royal hover:bg-royal-dark text-white h-14 rounded-2xl text-base font-bold shadow-lg shadow-royal/15 hover:shadow-royal/25 transition-colors disabled:opacity-70 disabled:hover:bg-royal"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t('contract.redirecting')}
                </span>
              ) : (
                t('buyButton')
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
