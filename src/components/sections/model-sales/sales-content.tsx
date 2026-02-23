'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, ShieldCheck, Zap, Globe, BadgePercent, Crown, MessageCircle } from 'lucide-react';
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
  const tier = TIER_DATA[selectedTier];

  const handleBuy = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ modelId: model.id, priceType: 'setup', locale }),
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
    <div className="flex flex-col h-full overflow-y-auto px-6 py-8 space-y-8 custom-scrollbar">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-50 w-fit px-3 py-1 rounded-full border border-emerald-100">
          <Zap className="w-3 h-3" />
          {t('deliveryTime')}
        </div>
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
            {tm('title')}
          </h2>
          <p className="text-slate-500 mt-2 leading-relaxed italic">
            {tm('description')}
          </p>
        </div>

        {/* Tier selector tabs */}
        {onTierChange && (
          <div className="flex gap-1 p-1 bg-slate-100 rounded-xl">
            {(Object.keys(TIER_DATA) as Tier[]).map((t) => (
              <button
                key={t}
                onClick={() => onTierChange(t)}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                  selectedTier === t
                    ? t === 'premium'
                      ? 'bg-amber-500 text-black shadow-sm'
                      : 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {TIER_DATA[t].label}
              </button>
            ))}
          </div>
        )}

        {/* Pricing block */}
        {tier.isCustom ? (
          /* Premium — projeto personalizado */
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 space-y-4">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-bold text-amber-800 uppercase tracking-wider">Projeto Personalizado</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-amber-700">A partir de</span>
            </div>
            <div className="text-5xl font-black text-amber-700">R$ 5k</div>
            <p className="text-sm text-amber-800 leading-relaxed">
              Desenvolvimento 100% sob medida: funcionalidades exclusivas, integrações customizadas e suporte dedicado além do modelo base.
            </p>
            <div className="flex items-center gap-2 text-amber-700 text-xs pt-2 border-t border-amber-200">
              <ShieldCheck className="w-4 h-4" />
              <span>Orçamento gratuito e sem compromisso</span>
            </div>
          </div>
        ) : (
          /* Essential / Professional */
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{t('pricing.from')}</span>
              <span className="text-xl font-bold text-slate-400 line-through">
                R$ {formatBRL(tier.anchor!)}
              </span>
            </div>

            {locale === 'pt' ? (
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-slate-600 font-medium">por</span>
                  <span className="text-4xl font-black text-royal">R$ {formatBRL(tier.price!)}</span>
                </div>
                <p className="text-xs text-slate-500">setup único</p>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <BadgePercent className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-emerald-900">
                      ou R$ {formatBRL(tier.pix!)} no Pix
                    </p>
                    <p className="text-xs text-emerald-700">pagamento à vista</p>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                    {tier.pixDiscount}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 font-medium">for</span>
                <span className="text-4xl font-black text-royal">R$ {formatBRL(tier.price!)}</span>
              </div>
            )}

            <div className="flex items-center gap-2 text-slate-600 text-xs pt-2 border-t border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>{t('pricing.guarantee')}</span>
            </div>
          </div>
        )}
      </div>

      {/* What's included */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-royal" />
          {t('whatsIncluded')}
        </h3>
        <ul className="grid grid-cols-1 gap-3">
          {Object.keys(tm.raw('features') || {}).map((key) => (
            <li key={key} className="flex items-center gap-3 text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="font-medium text-slate-600">{tm(`features.${key}`)}</span>
            </li>
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <li key={`def-${i}`} className="flex items-center gap-3 text-sm text-slate-700 bg-white/50 p-2 rounded-xl border border-dashed border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
              <span className="text-slate-500">{t(`features.${i}`)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Domain Notice */}
      <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-100 text-amber-900">
        <Globe className="w-4 h-4 shrink-0 mt-0.5" />
        <p className="text-xs leading-relaxed">{t('domainNotice')}</p>
      </div>

      <hr className="border-slate-100" />

      {/* Brandkit Explainer — only for non-premium */}
      {!tier.isCustom && <BrandkitExplainer />}

      {/* CTA Button */}
      <div className="sticky bottom-0 pt-4 pb-2 bg-gradient-to-t from-white via-white to-transparent">
        {tier.isCustom ? (
          <Button
            onClick={handlePremiumCTA}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black h-14 rounded-2xl text-lg font-bold shadow-xl shadow-amber-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar com especialista
          </Button>
        ) : (
          <Button
            onClick={handleBuy}
            disabled={isLoading}
            className="w-full bg-royal hover:bg-royal-dark text-white h-14 rounded-2xl text-lg font-bold shadow-xl shadow-royal/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:scale-100"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                {locale === 'pt' ? 'Redirecionando...' : 'Redirecting...'}
              </span>
            ) : (
              t('buyButton')
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
