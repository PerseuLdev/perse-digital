'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { TrustUsersIcon, TrustGlobeIcon, TrustStarIcon, TrustClockIcon } from '@/components/icons/TrustIcons';

const stats = [
  { icon: TrustUsersIcon, valueKey: 'clients' },
  { icon: TrustGlobeIcon, valueKey: 'niches' },
  { icon: TrustStarIcon,  valueKey: 'rating' },
  { icon: TrustClockIcon, valueKey: 'uptime' },
];

export function TrustBar() {
  const t = useTranslations('trustBar');

  return (
    <section className="relative z-10 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm px-8 py-6"
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6"
          >
            {t('label')}
          </motion.p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-border/50">
            {stats.map(({ icon: Icon, valueKey }, index) => (
              <motion.div
                key={valueKey}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="flex flex-col items-center gap-2 md:px-6 group"
              >
                <div className="relative w-12 h-12 mb-1 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-full h-full drop-shadow-md" />
                </div>
                <span className="text-2xl font-bold tracking-tight">
                  {t(`stats.${valueKey}.value`)}
                </span>
                <span className="text-xs text-muted-foreground text-center leading-tight">
                  {t(`stats.${valueKey}.label`)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
