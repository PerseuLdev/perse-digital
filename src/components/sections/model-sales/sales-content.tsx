'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, ShieldCheck, Zap, Globe, BadgePercent, Crown, MessageCircle, FileText, ArrowLeft } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { BrandkitExplainer } from './brandkit-explainer';
import { Model } from '@/components/sections/model-card';
import type { Tier } from '@/contexts/tier-context';

const TIER_DATA = {
  essential: {
    label: 'Essencial',
    price: 690,
    anchor: 999,
    pix: 620,
    pixDiscount: '-10%',
    isCustom: false,
  },
  professional: {
    label: 'Profissional',
    price: 1800,
    anchor: 2499,
    pix: 1620,
    pixDiscount: '-10%',
    isCustom: false,
  },
  premium: {
    label: 'Premium',
    isCustom: true,
    price: null,
    anchor: null,
    pix: null,
    pixDiscount: null,
  },
} as const;

function formatBRL(value: number) {
  return value.toLocaleString('pt-BR');
}

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
  const [showContract, setShowContract] = useState(false);
  const [contractAccepted, setContractAccepted] = useState(false);
  const tier = TIER_DATA[selectedTier];

  const contractContent = locale === 'pt' ? {
    back: 'Voltar',
    title: 'Antes de prosseguir',
    subtitle: 'Revise os termos do serviço contratado.',
    items: [
      'Entrega em até 7 dias úteis após receber o Brandkit',
      'Até 2 rodadas de ajustes incluídas no escopo',
      'Pagamento único — sem mensalidade ou taxa recorrente',
      'Domínio e hospedagem são de responsabilidade do cliente',
    ],
    contractHref: '/terms',
    pdfLink: 'Ver termos do serviço',
    checkboxLabel: 'Li e aceito os termos do contrato de serviço',
    cta: 'Prosseguir para pagamento',
    redirecting: 'Redirecionando...',
  } : {
    back: 'Go back',
    title: 'Before proceeding',
    subtitle: 'Please review the service terms.',
    items: [
      'Delivery within 7 business days after receiving your Brandkit',
      'Up to 2 rounds of revisions included',
      'One-time payment — no recurring fees',
      'Domain and hosting are the client\'s responsibility',
    ],
    contractHref: '/en/terms',
    pdfLink: 'View full Terms of Service',
    checkboxLabel: 'I have read and agree to the service contract terms',
    cta: 'Proceed to payment',
    redirecting: 'Redirecting...',
  };

  const handleBuyClick = () => {
    setContractAccepted(false);
    setShowContract(true);
  };

  const handleConfirmCheckout = async () => {
    setIsLoading(true);
    setShowContract(false);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ modelId: model.id, tier: selectedTier, paymentMethod: 'card', locale }),
      });
      if (!res.ok) throw new Error('Checkout failed');
      const { url } = await res.json();
      window.location.href = url;
    } catch {
      const modelTitle = tm('title');
      const message = `Olá! Quero o modelo ${modelTitle} no plano ${tier.label}. Como procedemos?`;
      window.open(`https://wa.me/5514991071072?text=${encodeURIComponent(message)}`, '_blank');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePremiumCTA = () => {
    const modelTitle = tm('title');
    const message = `Olá! Tenho interesse no plano Premium para o modelo ${modelTitle}. Como funciona o projeto personalizado?`;
    window.open(`https://wa.me/5514991071072?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative flex flex-col h-full overflow-y-auto px-6 py-8 space-y-8 custom-scrollbar">

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
              {contractContent.back}
            </button>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">{contractContent.title}</h3>
              <p className="text-sm text-slate-500">{contractContent.subtitle}</p>
            </div>

            <ul className="space-y-3">
              {contractContent.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={contractContent.contractHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-royal hover:underline font-medium"
            >
              <FileText className="w-4 h-4" />
              {contractContent.pdfLink}
            </a>

            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={contractAccepted}
                onChange={(e) => setContractAccepted(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-royal cursor-pointer"
              />
              <span className="text-sm text-slate-700">
                {contractContent.checkboxLabel}
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
                    {contractContent.redirecting}
                  </span>
                ) : (
                  contractContent.cta
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
                  {TIER_DATA[key].label}
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
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest">Projeto Personalizado</span>
                  </div>
                  <div>
                    <p className="text-xs text-amber-700/60 font-medium mb-0.5">A partir de</p>
                    <span className="text-5xl font-black text-amber-700 tracking-tighter">R$ 5k</span>
                  </div>
                  <p className="text-sm text-amber-800/80 leading-relaxed">
                    Desenvolvimento 100% sob medida: funcionalidades exclusivas, integrações customizadas e suporte dedicado além do modelo base.
                  </p>
                  <div className="flex items-center gap-2 text-amber-700/70 text-xs pt-3 border-t border-amber-200/60">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Orçamento gratuito e sem compromisso</span>
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
                  R$ {formatBRL(tier.anchor!)}
                </span>
              </div>

              <div className="space-y-3">
                {/* Main price */}
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs font-medium text-slate-400">por</span>
                  <span className="text-5xl font-black text-royal tracking-tighter">R$ {formatBRL(tier.price!)}</span>
                </div>
                <p className="text-[11px] text-slate-400 -mt-1">setup único</p>

                {/* Pix block */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-100">
                  <BadgePercent className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-emerald-900">
                      ou R$ {formatBRL(tier.pix!)} no Pix
                    </p>
                    <p className="text-[11px] text-emerald-700/70">pagamento à vista</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold tracking-wide">
                    {tier.pixDiscount}
                  </span>
                </div>
              </div>

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

        {/* Features — clean divide-y list, no cards */}
        <motion.div 
          className="divide-y divide-slate-100"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.05 } }
          }}
        >
          {Object.keys(tm.raw('features') || {}).map((key) => (
            <motion.div 
              key={key} 
              variants={{
                hidden: { opacity: 0, x: -10 },
                show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
              }}
              className="flex items-center gap-3 py-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-sm font-medium text-slate-700">{tm(`features.${key}`)}</span>
            </motion.div>
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div 
              key={`def-${i}`}
              variants={{
                hidden: { opacity: 0, x: -10 },
                show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
              }}
              className="flex items-center gap-3 py-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
              <span className="text-sm text-slate-400">{t(`features.${i}`)}</span>
            </motion.div>
          ))}
        </motion.div>
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
              Falar com especialista
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
                  {locale === 'pt' ? 'Redirecionando...' : 'Redirecting...'}
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
