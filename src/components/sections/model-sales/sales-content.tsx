'use client';

import { CheckCircle2, Clock, ShieldCheck, Zap, Globe, BadgePercent, CreditCard } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { BrandkitExplainer } from './brandkit-explainer';
import { Model } from '@/components/sections/model-card';

interface SalesContentProps {
  model: Model;
}

export function SalesContent({ model }: SalesContentProps) {
  const t = useTranslations('sales');
  const common = useTranslations('common');
  const locale = useLocale();

  const handleBuy = () => {
    const message = `Olá! Quero comprar o modelo ${model.title}. Como procedemos com o pagamento e envio do Brandkit?`;
    window.open(`https://wa.me/5514991071072?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto px-6 py-8 space-y-10 custom-scrollbar">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-50 w-fit px-3 py-1 rounded-full border border-emerald-100">
          <Zap className="w-3 h-3" />
          {t('deliveryTime')}
        </div>
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
            {model.title}
          </h2>
          <p className="text-slate-500 mt-2 leading-relaxed italic">
            {model.description}
          </p>
        </div>

        {/* Pricing Section */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 space-y-4">
          {/* Original Price (strikethrough) */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">{t('pricing.from')}</span>
            <span className="text-xl font-bold text-slate-400 line-through">{t('pricing.originalPrice')}</span>
          </div>

          {/* Current Price */}
          {locale === 'pt' ? (
            <div className="space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-slate-600 font-medium">{t('pricing.for')}</span>
                <span className="text-3xl font-black text-royal">{t('pricing.installments')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <BadgePercent className="w-5 h-5 text-emerald-600" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-emerald-900">{t('pricing.or')} {t('pricing.pixPrice')}</p>
                  <p className="text-xs text-emerald-700">{t('pricing.pixLabel')}</p>
                </div>
                <span className="px-2 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold">{t('pricing.pixDiscount')}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 font-medium">{t('pricing.for')}</span>
              <span className="text-4xl font-black text-royal">{t('pricing.currentPrice')}</span>
            </div>
          )}

          {/* Guarantee badge */}
          <div className="flex items-center gap-2 text-slate-600 text-xs pt-2 border-t border-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>{t('pricing.guarantee')}</span>
          </div>
        </div>
      </div>

      {/* What's included */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-royal" />
          {t('whatsIncluded')}
        </h3>
        <ul className="grid grid-cols-1 gap-3">
          {model.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="font-medium text-slate-600">{feature}</span>
            </li>
          ))}
          {/* Default features from translations */}
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={`def-${i}`} className="flex items-center gap-3 text-sm text-slate-700 bg-white/50 p-2 rounded-xl border border-dashed border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
              <span className="text-slate-500">{t(`features.${i-1}`)}</span>
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

      {/* Brandkit Explainer */}
      <BrandkitExplainer />

      {/* CTA Button */}
      <div className="sticky bottom-0 pt-4 pb-2 bg-gradient-to-t from-white via-white to-transparent">
        <Button
          onClick={handleBuy}
          className="w-full bg-royal hover:bg-royal-dark text-white h-14 rounded-2xl text-lg font-bold shadow-xl shadow-royal/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          {t('buyButton')}
        </Button>
      </div>
    </div>
  );
}
