'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { HeroParticles } from './hero-particles';
import { HeroMockups } from './hero-mockups';

// Animated counter component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Mouse follower gradient
function MouseGradient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-0 w-[600px] h-[600px] rounded-full opacity-20"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, oklch(0.55 0.18 260 / 0.4) 0%, transparent 70%)',
        filter: 'blur(100px)',
      }}
    />
  );
}

// Animated text reveal with stagger
function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// Premium CTA — renders as div (safe inside <Link>)
function CTAButton({
  children,
  variant = 'primary',
  icon,
  delay = 0,
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  delay?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative group overflow-hidden
        px-7 py-3.5
        rounded-full
        font-medium text-[15px] tracking-wide
        transition-all duration-500 ease-out cursor-pointer
        ${variant === 'primary'
          ? 'bg-accent text-[#111111] hover:shadow-[0_20px_40px_-12px_rgba(255,222,89,0.45)]'
          : 'bg-transparent border border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-foreground/5'
        }
      `}
    >
      {/* Shine effect on hover */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          animate={{ translateX: isHovered ? '200%' : '-100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {icon && (
          <motion.span
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {icon}
          </motion.span>
        )}
      </span>
    </motion.div>
  );
}

export function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();
  const containerRef = useRef<HTMLElement>(null);
  const [mounted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Much slower fade - content stays visible longer
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]); // Reduced from 100 to 80 to keep content within bounds
  const opacity = useTransform(scrollYProgress, [0, 0.7, 0.95], [1, 1, 0]); // Content stays opaque longer
  const scale = useTransform(scrollYProgress, [0, 0.95], [1, 0.99]); // More subtle scale change

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Mouse follower */}
      {mounted && <MouseGradient />}

      {/* Particles */}
      <HeroParticles />

      {/* Subtle gradient overlays - Refined to avoid clipping content */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.55_0.15_260/0.12),transparent)] z-10 pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] z-10 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-30 w-full max-w-7xl mx-auto px-6 pt-28 sm:pt-32 lg:pt-36 pb-24 sm:pb-32 lg:pb-40"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left column - Text content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-foreground/70 tracking-wide">
                {t('hero.badge')}
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-[-0.03em] leading-[1.1]">
                <AnimatedText text={t('hero.headline')} className="text-foreground block" delay={0.2} />

                <span className="block mt-2">
                  <motion.span
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-primary"
                  >
                    {t('hero.headlineHighlight')}
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-foreground/60 max-w-lg mb-10 leading-relaxed font-light"
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* CTA */}
            <div className="relative z-50 flex flex-col items-center lg:items-start gap-3 mb-12">
              <Link href={`/${locale}/templates`}>
                <CTAButton
                  variant="primary"
                  icon={<ArrowRight className="w-4 h-4" />}
                  delay={0.7}
                >
                  {t('hero.cta.primary')}
                </CTAButton>
              </Link>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-xs text-foreground/40 tracking-wide"
              >
                {t('hero.cta.microcopy')}
              </motion.p>
            </div>

            {/* Stats - Minimal, refined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-8 sm:gap-12"
            >
              {[
                { value: 10, suffix: '+', label: t('hero.stats.templates') },
                { value: 500, suffix: '+', label: t('hero.stats.clients') },
                { value: 99.9, suffix: '%', label: t('hero.stats.uptime') },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-foreground/50 uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Device mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <HeroMockups />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator - Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-foreground/40 cursor-pointer group hover:text-foreground/60 transition-colors"
        >
          <div className="w-5 h-8 rounded-full border border-current flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-current"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
