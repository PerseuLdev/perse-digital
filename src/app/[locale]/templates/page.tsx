'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Search, 
  ExternalLink, 
  Monitor, 
  Smartphone,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { AnimatedBackground } from '@/components/layout/animated-background';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { BackToTop } from '@/components/ui/back-to-top';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { ModelCard, type Model } from '@/components/sections/model-card';
import { MODELS } from '@/lib/models-data';


export default function ModelsPage() {
  const t = useTranslations('models');
  const sharedT = useTranslations('common');
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const [objectiveFilter, setObjectiveFilter] = useState('all');

  const filteredModels = MODELS.filter(item => {
    const matchesCategory = filter === 'all' || item.category === filter;
    const matchesObjective = objectiveFilter === 'all' || item.objective === objectiveFilter;
    return matchesCategory && matchesObjective;
  });

  const categories = [
    'all',
    'health',
    'law',
    'fitness',
    'beauty',
    'education',
    'tech',
    'services',
  ];

  const objectives = [
    { id: 'all', key: 'allObjectives' },
    { id: 'leads', key: 'leads' },
    { id: 'scheduling', key: 'scheduling' },
    { id: 'portfolio', key: 'portfolio' },
  ];

  const faqKeys = ['colors', 'time', 'responsive', 'hosting'] as const;

  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <main className="relative pt-32 pb-24 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 text-royal-light" />
              <span>{t('badge')}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              {t('pageTitle')} <br />
              <span className="text-gradient">{t('pageTitleHighlight')}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>
          </header>

          {/* Filters Wrapper */}
          <div className="space-y-8 mb-16 relative z-10">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((catId) => (
                <Button
                  key={catId}
                  variant={filter === catId ? 'primary' : 'outline'}
                  onClick={() => setFilter(catId)}
                  size="sm"
                  className={cn(
                    "rounded-full px-6 transition-all duration-300",
                    filter === catId && "shadow-lg shadow-royal/20"
                  )}
                >
                  {t(`filters.${catId}`)}
                </Button>
              ))}
            </div>

            {/* Objective Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="w-full text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{t('filters.objective')}</span>
              {objectives.map((obj) => (
                <Button
                  key={obj.id}
                  variant={objectiveFilter === obj.id ? 'secondary' : 'ghost'}
                  onClick={() => setObjectiveFilter(obj.id)}
                  size="sm"
                  className={cn(
                    "rounded-full px-5 py-1 text-xs",
                    objectiveFilter === obj.id && "bg-white/10"
                  )}
                >
                  {t(`filters.${obj.key}`)}
                </Button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredModels.map((model) => (
                <motion.div
                  key={model.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <ModelCard 
                    model={model}
                    onClickDemo={() => router.push(`/templates/${model.id}/preview`)}
                    onClickChoose={() => window.open(`https://wa.me/5514991071072?text=${sharedT('whatsappMessage')} (Model: ${model.title})`, '_blank')}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* FAQ Section */}
          <section className="mt-40 max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">{t('faq.title')}</h2>
              <p className="text-muted-foreground">{t('faq.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {faqKeys.map((key) => (
                <GlassCard key={key} variant="subtle" className="p-8">
                  <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-royal" />
                    {t(`faq.items.${key}.q`)}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`faq.items.${key}.a`)}
                  </p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Footer CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-royal via-royal to-royal-dark text-white text-center shadow-2xl shadow-royal/30 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-light/10 rounded-full blur-3xl -ml-32 -mb-32" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">{t('cta.title')}</h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto relative z-10">
              {t('cta.subtitle')}
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-12 h-16 rounded-2xl relative z-10"
            >
              {t('cta.button')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />

      <WhatsAppButton phoneNumber="+5514991071072" />
      <BackToTop />
    </>
  );
}
