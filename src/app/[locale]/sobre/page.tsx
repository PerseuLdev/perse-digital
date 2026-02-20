'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Search, ShieldCheck, Clock, Unplug, ImageIcon, TrendingUp, MessageCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { LogoSVG } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '5514991071072';

const benefitIcons = [Search, ShieldCheck, Clock, Unplug, ImageIcon, TrendingUp];
const benefitKeys = ['google', 'credibility', 'h247', 'independence', 'portfolio', 'roi'] as const;

function HeroSection() {
  const t = useTranslations('aboutPage');

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 pt-32 pb-20">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            {t('hero.badge')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
        >
          {t('hero.title')}{' '}
          <span className="text-gradient">{t('hero.titleHighlight')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xl text-muted-foreground mb-12"
        >
          {t('hero.meaning')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center"
        >
          <LogoSVG className="h-16 w-auto opacity-80" />
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  const t = useTranslations('aboutPage');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative z-10 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Card stack */}
            <div className="relative">
              {/* Back card */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-primary/5 border border-primary/10" />
              {/* Main card */}
              <div className="relative glass rounded-3xl p-10 border border-border/50">
                <div className="flex flex-col gap-8">
                  {/* Stat row */}
                  <div className="grid grid-cols-2 gap-6">
                    {(['clients', 'delivery', 'price', 'responsive'] as const).map((key, i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        className="text-center p-4 rounded-2xl bg-primary/5 border border-primary/10"
                      >
                        <div className="text-2xl font-bold text-gradient">{t(`story.stats.${key}.value`)}</div>
                        <div className="text-xs text-muted-foreground mt-1">{t(`story.stats.${key}.label`)}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="border-l-2 border-primary/40 pl-4"
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      &quot;{t('story.quote')}&quot;
                    </p>
                    <footer className="mt-2 text-xs text-primary font-medium">— {t('story.quoteAuthor')}</footer>
                  </motion.blockquote>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
              {t('story.badge')}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              {t('story.title')}
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              {(['p1', 'p2', 'p3'] as const).map((key, i) => (
                <motion.p
                  key={key}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className={i === 0 ? 'text-foreground/90 font-medium' : ''}
                >
                  {t(`story.${key}`)}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function YouSection() {
  const t = useTranslations('aboutPage');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="relative z-10 px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-12 border border-border/50 relative overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            {t('you.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('you.text')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const t = useTranslations('aboutPage');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="relative z-10 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('benefits.subtitle')}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitKeys.map((key, index) => {
            const Icon = benefitIcons[index];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass rounded-2xl p-7 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {t(`benefits.items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`benefits.items.${key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const t = useTranslations('aboutPage');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('cta.message'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section ref={ref} className="relative z-10 px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,182,255,0.15),transparent_60%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="relative text-center px-8 py-16 md:py-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <LogoSVG className="h-12 w-auto opacity-70" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {t('cta.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-lg mb-10"
            >
              {t('cta.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                onClick={handleWhatsApp}
                variant="glow"
                size="lg"
                className="gap-2.5 text-base px-8 py-4 h-auto"
              >
                <MessageCircle className="w-5 h-5" />
                {t('cta.button')}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <YouSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
