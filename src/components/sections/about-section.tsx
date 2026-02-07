'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

const benefitKeys = ['seo', 'design', 'easy', 'support', 'integrations'] as const;

const teamImages = [
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=500&fit=crop',
    alt: 'Equipe trabalhando',
    className: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop',
    alt: 'Colaboração em equipe',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop',
    alt: 'Reunião de equipe',
    className: 'col-span-1 row-span-1',
  },
];

export function AboutSection() {
  const t = useTranslations('about');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative z-10 px-6 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4">
              {teamImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative rounded-2xl overflow-hidden ${img.className}`}
                  style={{ aspectRatio: img.className.includes('row-span-2') ? '4/5' : '1/1' }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('title')}{' '}
              <span className="text-gradient">{t('titleHighlight')}</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('description')}
            </p>

            <ul className="space-y-4 mb-10">
              {benefitKeys.map((key, index) => (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-1 rounded-full bg-primary/10">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/80">{t(`benefits.${key}`)}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="glow" size="lg">
              {t('cta')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
