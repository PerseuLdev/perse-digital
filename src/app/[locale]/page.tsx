'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
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
import { LeadForm } from '@/components/sections/lead-form';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { BackToTop } from '@/components/ui/back-to-top';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

export default function HomePage() {
  const t = useTranslations();

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
        <section className="relative z-10 px-6 py-32" id="how-it-works">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title={t('howItWorks.title')}
              subtitle={t('howItWorks.subtitle')}
            />

            <div className="relative mt-20">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />

              <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                {[
                  {
                    step: '01',
                    title: t('howItWorks.steps.choose.title'),
                    description: t('howItWorks.steps.choose.description'),
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
                  },
                  {
                    step: '02',
                    title: t('howItWorks.steps.customize.title'),
                    description: t('howItWorks.steps.customize.description'),
                    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=300&h=200&fit=crop',
                  },
                  {
                    step: '03',
                    title: t('howItWorks.steps.launch.title'),
                    description: t('howItWorks.steps.launch.description'),
                    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop',
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="text-center relative"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="relative w-full h-40 rounded-2xl overflow-hidden mb-6"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      {/* Step Number */}
      <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-royal to-royal-light opacity-20 animate-pulse" />
        <div className="absolute inset-1 rounded-full glass" />
        <span className="relative text-2xl font-bold text-gradient">{step}</span>
      </div>

      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
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
