'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Smartphone,
  Check,
  ChevronRight,
  Star,
} from 'lucide-react';
import { AnimatedBackground } from '@/components/layout/animated-background';
import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/hero/hero-section';
import { NichesSection } from '@/components/sections/niches-section';
import { AboutSection } from '@/components/sections/about-section';
import { ParallaxBanner } from '@/components/sections/parallax-banner';
import { FAQSection } from '@/components/sections/faq-section';
import { ArticlesSection } from '@/components/sections/articles-section';
import { LeadForm } from '@/components/sections/lead-form';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { BackToTop } from '@/components/ui/back-to-top';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

export default function HomePage() {
  const t = useTranslations();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Niches Section - com fotos de profissionais */}
        <NichesSection />

        {/* Parallax Banner 1 */}
        <ParallaxBanner
          title={t('parallax.banner1.title')}
          subtitle={t('parallax.banner1.subtitle')}
          image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&h=1080&fit=crop"
        />

        {/* About Section - com fotos da equipe */}
        <AboutSection />

        {/* ========== FEATURES SECTION ========== */}
        <section className="relative z-10 px-6 py-32" id="features">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title={t('whyNextjs.title')}
              subtitle={t('whyNextjs.subtitle')}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                {
                  icon: Zap,
                  title: t('whyNextjs.features.speed.title'),
                  description: t('whyNextjs.features.speed.description'),
                  gradient: 'from-amber-500 to-orange-600',
                },
                {
                  icon: Sparkles,
                  title: t('whyNextjs.features.seo.title'),
                  description: t('whyNextjs.features.seo.description'),
                  gradient: 'from-royal to-royal-light',
                },
                {
                  icon: Shield,
                  title: t('whyNextjs.features.security.title'),
                  description: t('whyNextjs.features.security.description'),
                  gradient: 'from-emerald-500 to-teal-600',
                },
                {
                  icon: Smartphone,
                  title: t('whyNextjs.features.mobile.title'),
                  description: t('whyNextjs.features.mobile.description'),
                  gradient: 'from-violet-500 to-purple-600',
                },
              ].map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Parallax Banner 2 */}
        <ParallaxBanner
          title={t('parallax.banner2.title')}
          subtitle={t('parallax.banner2.subtitle')}
          image="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop"
        />

        {/* ========== PRICING SECTION ========== */}
        <section className="relative z-10 px-6 py-32" id="pricing">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title={t('pricing.title')}
              subtitle={t('pricing.subtitle')}
            />

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <PricingCard
                name={t('pricing.plans.essential.name')}
                description={t('pricing.plans.essential.description')}
                price={t('pricing.plans.essential.prices.' + t('pricing.currency.code'))}
                features={[
                  t('pricing.plans.essential.features.0'),
                  t('pricing.plans.essential.features.1'),
                  t('pricing.plans.essential.features.2'),
                  t('pricing.plans.essential.features.3'),
                  t('pricing.plans.essential.features.4'),
                ]}
                cta={t('pricing.cta')}
                currency={t('pricing.currency.symbol')}
                period={t('pricing.period')}
                delay={0}
              />

              <PricingCard
                name={t('pricing.plans.professional.name')}
                description={t('pricing.plans.professional.description')}
                price={t('pricing.plans.professional.prices.' + t('pricing.currency.code'))}
                badge={t('pricing.plans.professional.badge')}
                features={[
                  t('pricing.plans.professional.features.0'),
                  t('pricing.plans.professional.features.1'),
                  t('pricing.plans.professional.features.2'),
                  t('pricing.plans.professional.features.3'),
                  t('pricing.plans.professional.features.4'),
                  t('pricing.plans.professional.features.5'),
                ]}
                cta={t('pricing.cta')}
                currency={t('pricing.currency.symbol')}
                period={t('pricing.period')}
                featured
                delay={0.1}
              />

              <PricingCard
                name={t('pricing.plans.elite.name')}
                description={t('pricing.plans.elite.description')}
                price={t('pricing.plans.elite.prices.' + t('pricing.currency.code'))}
                features={[
                  t('pricing.plans.elite.features.0'),
                  t('pricing.plans.elite.features.1'),
                  t('pricing.plans.elite.features.2'),
                  t('pricing.plans.elite.features.3'),
                  t('pricing.plans.elite.features.4'),
                  t('pricing.plans.elite.features.5'),
                ]}
                cta={t('pricing.cta')}
                currency={t('pricing.currency.symbol')}
                period={t('pricing.period')}
                delay={0.2}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mt-12"
            >
              {t('pricing.guarantee')}
            </motion.p>
          </div>
        </section>

        {/* ========== HOW IT WORKS SECTION ========== */}
        <section
          ref={containerRef}
          className="relative z-10 px-6 py-32 overflow-hidden"
          id="how-it-works"
        >
          {/* Ambient atmosphere */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 -left-48 w-[700px] h-[700px] rounded-full bg-royal/[0.04] blur-[130px]" />
            <div className="absolute bottom-1/4 -right-48 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[130px]" />
          </div>

          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title={t('howItWorks.title')}
              subtitle={t('howItWorks.subtitle')}
            />

            <div className="relative mt-24">
              {/* Timeline track — desktop only */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/[0.08] -translate-x-1/2" />

              {/* Animated spine — glow layer */}
              <motion.div
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[8px] bg-gradient-to-b from-royal to-royal-light opacity-20 -translate-x-1/2 origin-top blur-[5px]"
                style={{ scaleY }}
              />
              {/* Animated spine — sharp layer */}
              <motion.div
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-royal to-royal-light -translate-x-1/2 origin-top"
                style={{ scaleY }}
              />

              <div className="flex flex-col gap-20 md:gap-28">
                {[
                  {
                    step: '01',
                    title: t('howItWorks.steps.choose.title'),
                    description: t('howItWorks.steps.choose.description'),
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
                  },
                  {
                    step: '02',
                    title: t('howItWorks.steps.customize.title'),
                    description: t('howItWorks.steps.customize.description'),
                    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop',
                  },
                  {
                    step: '03',
                    title: t('howItWorks.steps.launch.title'),
                    description: t('howItWorks.steps.launch.description'),
                    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
                  },
                ].map((item, index) => (
                  <StepCard key={index} {...item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIALS SECTION ========== */}
        <section className="relative z-10 px-6 py-32">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title={t('testimonials.title')}
              subtitle={t('testimonials.subtitle')}
            />

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  quote: t('testimonials.items.t1.quote'),
                  author: t('testimonials.items.t1.author'),
                  role: t('testimonials.items.t1.role'),
                  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                },
                {
                  quote: t('testimonials.items.t2.quote'),
                  author: t('testimonials.items.t2.author'),
                  role: t('testimonials.items.t2.role'),
                  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                },
                {
                  quote: t('testimonials.items.t3.quote'),
                  author: t('testimonials.items.t3.author'),
                  role: t('testimonials.items.t3.role'),
                  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
                },
              ].map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ========== ARTICLES SECTION ========== */}
        <ArticlesSection />

        {/* ========== FAQ SECTION ========== */}
        <FAQSection />

        {/* ========== LEAD FORM SECTION ========== */}
        <LeadForm />

        {/* ========== CTA SECTION ========== */}
        <section className="relative z-10 px-6 py-32">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden"
            >
              {/* Background image with overlay */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop"
                  alt={t('cta.imageAlt')}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-royal/90 via-primary/85 to-royal-light/90" />
              </div>

              {/* Pattern overlay */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
                  backgroundSize: '60px 60px',
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-16 md:p-24 text-center text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  {t('cta.title')}
                  <br />
                  {t('cta.titleLine2')}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto"
                >
                  {t('cta.subtitle')}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Button
                    variant="secondary"
                    size="xl"
                    className="bg-white text-primary hover:bg-white/90 shadow-2xl shadow-black/20 text-lg px-12"
                  >
                    {t('cta.button')}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />

        {/* WhatsApp Button */}
        <WhatsAppButton phoneNumber="+5514991071072" />

        {/* Back to Top Button */}
        <BackToTop />
      </main>
    </>
  );
}

// ========== COMPONENTS ==========

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h2>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <GlassCard variant="bordered" className="p-8 h-full group">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </GlassCard>
    </motion.div>
  );
}

function PricingCard({
  name,
  description,
  price,
  badge,
  features,
  cta,
  currency,
  period,
  featured = false,
  delay,
}: {
  name: string;
  description: string;
  price: string;
  badge?: string;
  features: string[];
  cta: string;
  currency: string;
  period: string;
  featured?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={featured ? 'md:-mt-4 md:mb-4' : ''}
    >
      <GlassCard
        variant={featured ? 'glow' : 'bordered'}
        className={`p-8 h-full relative ${featured ? 'border-2 border-primary' : ''}`}
      >
        {badge && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-royal to-royal-light text-white text-sm font-semibold shadow-lg">
            {badge}
          </div>
        )}

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="text-center mb-8">
          <span className="text-5xl font-bold">{currency}{price}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-primary/10 mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant={featured ? 'glow' : 'outline'}
          size="lg"
          className="w-full"
        >
          {cta}
        </Button>
      </GlassCard>
    </motion.div>
  );
}

function StepCard({
  step,
  title,
  description,
  image,
  index,
}: {
  step: string;
  title: string;
  description: string;
  image: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-[1fr_88px_1fr] items-center gap-8 md:gap-0"
    >
      {/* ── Content ── */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -52 : 52 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`relative z-10 overflow-visible ${
          isEven
            ? 'md:col-start-1 md:row-start-1 md:pr-10 md:text-right'
            : 'md:col-start-3 md:row-start-1 md:pl-10'
        }`}
      >
        {/* Ghost step number */}
        <div
          className={`absolute -top-4 text-[7.5rem] md:text-[10rem] font-black leading-none select-none pointer-events-none text-primary/[0.06] ${
            isEven ? 'right-0' : 'left-0'
          }`}
          aria-hidden="true"
        >
          {step}
        </div>

        {/* Mobile badge */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
          className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-royal to-royal-light text-white font-black text-sm mb-5 shadow-xl shadow-royal/30"
        >
          {step}
        </motion.div>

        {/* Accent rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.42, delay: 0.32, ease: 'easeOut' }}
          className={`hidden md:block h-[2px] w-10 rounded-full bg-gradient-to-r from-royal to-royal-light mb-5 ${
            isEven ? 'ml-auto origin-right' : 'origin-left'
          }`}
        />

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.14 }}
          className="text-3xl md:text-4xl font-bold mb-4 leading-tight relative z-10"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.24 }}
          className={`text-base md:text-lg text-muted-foreground leading-relaxed relative z-10 max-w-sm ${
            isEven ? 'md:ml-auto' : ''
          }`}
        >
          {description}
        </motion.p>
      </motion.div>

      {/* ── Center node (desktop only) ── */}
      <div className="hidden md:flex md:col-start-2 md:row-start-1 justify-center items-center z-30">
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 240, damping: 16, delay: 0.4 }}
          className="relative"
        >
          {/* Ripple ring 1 */}
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={isInView ? { scale: [1, 2.9], opacity: [0.5, 0] } : {}}
            transition={{ duration: 0.9, delay: 0.68, ease: 'easeOut' }}
            className="absolute inset-0 rounded-2xl bg-royal"
          />
          {/* Ripple ring 2 */}
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={isInView ? { scale: [1, 2.1], opacity: [0.35, 0] } : {}}
            transition={{ duration: 0.9, delay: 0.84, ease: 'easeOut' }}
            className="absolute inset-0 rounded-2xl bg-royal-light"
          />
          <div className="relative w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-royal via-primary to-royal-light flex items-center justify-center shadow-2xl shadow-primary/40 ring-[3px] ring-background">
            <span className="text-base font-black text-white tracking-tight">{step}</span>
          </div>
        </motion.div>
      </div>

      {/* ── Image ── */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 52 : -52 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.08 }}
        className={`z-10 ${
          isEven
            ? 'md:col-start-3 md:row-start-1 md:pl-10'
            : 'md:col-start-1 md:row-start-1 md:pr-10'
        }`}
      >
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-2xl shadow-black/10">
          {/* Curtain reveal */}
          <motion.div
            initial={{ clipPath: isEven ? 'inset(0 100% 0 0)' : 'inset(0 0% 0 100%)' }}
            animate={isInView ? { clipPath: 'inset(0 0% 0 0%)' } : {}}
            transition={{ duration: 1.05, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Colour tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-royal/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

          {/* Hover glint sweep */}
          <motion.div
            initial={{ x: '-130%', opacity: 0 }}
            whileHover={{ x: '230%', opacity: 0.18 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="absolute inset-y-0 w-1/3 bg-white pointer-events-none"
            style={{ transform: 'skewX(-12deg)' }}
          />
        </div>
      </motion.div>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  index,
}: {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <GlassCard variant="bordered" className="p-8 h-full">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>

        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20">
            <Image
              src={avatar}
              alt={author}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <div>
            <div className="font-semibold text-lg">{author}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
