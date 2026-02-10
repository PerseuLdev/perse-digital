'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';

const niches = [
  {
    key: 'health',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    key: 'beauty',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop',
    color: 'from-pink-500 to-rose-600',
  },
  {
    key: 'fitness',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
    color: 'from-orange-500 to-amber-600',
  },
  {
    key: 'law',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
    color: 'from-slate-600 to-slate-800',
  },
  {
    key: 'education',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    key: 'psychology',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
    color: 'from-purple-500 to-violet-600',
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
      className="group relative"
    >
      <div className="relative h-80 rounded-3xl overflow-hidden cursor-pointer">
        {/* Image */}
        <Image
          src={niche.image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t ${niche.color} opacity-60 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/80 text-sm mb-4">{description}</p>

            <div className="flex items-center gap-2 text-white/90 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span>{t('viewTemplates')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>

        {/* Hover border effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/30 transition-colors duration-300" />
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
