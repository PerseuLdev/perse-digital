'use client';

import { Palette, Type, Image as ImageIcon, Phone, Globe, Clock, MapPin, FileText } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function BrandkitExplainer() {
  const t = useTranslations('sales.brandkit');

  const brandItems = [
    { icon: ImageIcon, title: t('logo'), description: t('logoDesc') },
    { icon: Palette, title: t('colors'), description: t('colorsDesc') },
    { icon: Type, title: t('fonts'), description: t('fontsDesc') },
  ];

  const businessItems = [
    { icon: Phone, title: t('businessInfo.phone'), desc: t('businessInfo.phoneDesc') },
    { icon: Globe, title: t('businessInfo.social'), desc: t('businessInfo.socialDesc') },
    { icon: Clock, title: t('businessInfo.hours'), desc: t('businessInfo.hoursDesc') },
    { icon: MapPin, title: t('businessInfo.address'), desc: t('businessInfo.addressDesc') },
    { icon: FileText, title: t('businessInfo.content'), desc: t('businessInfo.contentDesc') },
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10px" }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } }
      }}
      className="space-y-6"
    >
      {/* Brandkit header */}
      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
        }}
        className="space-y-1"
      >
        <h3 className="text-base font-bold text-slate-900 tracking-tight">{t('title')}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          {t('description')}
        </p>
      </motion.div>

      {/* Brandkit items — divide-y, no card boxes */}
      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
        }}
        className="divide-y divide-slate-100"
      >
        {brandItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3 py-3">
            <div className="p-2 rounded-lg bg-royal/10 text-royal shrink-0">
              <item.icon className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-800">{item.title}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Tip */}
      <motion.div 
        variants={{
          hidden: { opacity: 0, scale: 0.98 },
          show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
        }}
        className="p-4 rounded-xl bg-amber-50 border border-amber-100/80 text-amber-800 text-xs leading-relaxed"
      >
        <strong className="font-semibold">Dica:</strong> {t('howToSend')}
      </motion.div>

      {/* Business info */}
      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
        }}
        className="space-y-4 pt-4 border-t border-slate-100"
      >
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-900 tracking-tight">{t('businessInfo.title')}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            {t('businessInfo.description')}
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {businessItems.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex items-start gap-3 py-3">
              <div className="p-1.5 rounded-lg bg-royal/10 text-royal shrink-0">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
