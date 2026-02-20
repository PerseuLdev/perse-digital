'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';

const niches = [
  {
    key: 'health',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop',
    themeColor: '160 55% 28%',
    icon: '🏥',
  },
  {
    key: 'beauty',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop',
    themeColor: '340 65% 38%',
    icon: '✨',
  },
  {
    key: 'fitness',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
    themeColor: '25 75% 38%',
    icon: '💪',
  },
  {
    key: 'law',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
    themeColor: '220 18% 28%',
    icon: '⚖️',
  },
  {
    key: 'education',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
    themeColor: '225 60% 38%',
    icon: '📚',
  },
  {
    key: 'psychology',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
    themeColor: '270 55% 35%',
    icon: '🧠',
  },
];

function NicheCard({ niche, index, t }: { niche: typeof niches[0]; index: number; t: ReturnType<typeof useTranslations> }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const title = t(`items.${niche.key}.title`);
  const description = t(`items.${niche.key}.description`);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ '--theme-color': niche.themeColor } as React.CSSProperties}
      className="group w-full h-80 cursor-pointer"
    >
      {/* Card container — escala no hover com glow colorido */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ease-in-out group-hover:scale-[1.03]"
        style={{
          boxShadow: `0 0 40px -15px hsl(${niche.themeColor} / 0.4)`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 60px -15px hsl(${niche.themeColor} / 0.65)`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px -15px hsl(${niche.themeColor} / 0.4)`;
        }}
      >
        {/* Imagem com zoom paralaxe */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
          style={{ backgroundImage: `url(${niche.image})` }}
        />

        {/* Gradient overlay temático */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, hsl(${niche.themeColor} / 0.92), hsl(${niche.themeColor} / 0.55) 35%, transparent 65%)`,
          }}
        />

        {/* Conteúdo */}
        <div className="relative flex flex-col justify-end h-full p-5 text-white">
          <h3 className="text-2xl font-bold tracking-tight">
            {title} <span className="ml-1">{niche.icon}</span>
          </h3>
          <p className="text-sm text-white/75 mt-1 font-medium line-clamp-2">{description}</p>

          {/* Barra glassmorphic "Ver modelos" */}
          <div
            className="mt-5 flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-300"
            style={{
              background: `hsl(${niche.themeColor} / 0.25)`,
              backdropFilter: 'blur(12px)',
              border: `1px solid hsl(${niche.themeColor} / 0.35)`,
            }}
            // @ts-ignore
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.background = `hsl(${niche.themeColor} / 0.45)`;
              el.style.borderColor = `hsl(${niche.themeColor} / 0.55)`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.background = `hsl(${niche.themeColor} / 0.25)`;
              el.style.borderColor = `hsl(${niche.themeColor} / 0.35)`;
            }}
          >
            <span className="text-sm font-semibold tracking-wide">{t('viewTemplates')}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function NichesSection() {
  const t = useTranslations('niches');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section ref={containerRef} className="relative z-10 px-6 py-32" id="templates">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('title')}{' '}
            <span className="text-gradient">{t('titleHighlight')}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {niches.map((niche, index) => (
            <Link key={niche.key} href={{ pathname: '/templates', query: { category: niche.key } }}>
              <NicheCard niche={niche} index={index} t={t} />
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link href="/templates">
            <Button
              size="xl"
              variant="glow"
              className="px-12 h-14 text-lg rounded-2xl group"
            >
              {t('viewTemplates')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
