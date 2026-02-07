'use client';

import { Palette, Type, Image as ImageIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function BrandkitExplainer() {
  const t = useTranslations('sales.brandkit');

  const items = [
    {
      icon: ImageIcon,
      title: t('logo'),
      description: t('logoDesc'),
    },
    {
      icon: Palette,
      title: t('colors'),
      description: t('colorsDesc'),
    },
    {
      icon: Type,
      title: t('fonts'),
      description: t('fontsDesc'),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-slate-900">{t('title')}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {t('description')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-md group"
          >
            <div className="p-3 rounded-xl bg-royal/10 text-royal group-hover:bg-royal group-hover:text-white transition-colors">
              <item.icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 text-amber-900 text-xs leading-relaxed">
        <strong>Dica:</strong> {t('howToSend')}
      </div>
    </div>
  );
}
