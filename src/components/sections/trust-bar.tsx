'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Star, Users, Globe, Clock } from 'lucide-react';

const stats = [
  { icon: Users, valueKey: 'clients', gradient: 'from-royal to-royal-light' },
  { icon: Globe,  valueKey: 'niches',  gradient: 'from-emerald-500 to-teal-600' },
  { icon: Star,   valueKey: 'rating',  gradient: 'from-amber-400 to-orange-500' },
  { icon: Clock,  valueKey: 'uptime',  gradient: 'from-violet-500 to-purple-600' },
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
            {stats.map(({ icon: Icon, valueKey, gradient }, index) => (
              <motion.div
                key={valueKey}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="flex flex-col items-center gap-2 md:px-6"
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm`}>
                  <Icon className="w-4 h-4 text-white" />
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
