'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { MODELS } from '@/lib/models-data';
import { MacbookPro } from '@/components/ui/macbook-pro';
import { Iphone16Pro } from '@/components/ui/iphone-16-pro';

// Only models with internal Next.js routes
const CAROUSEL_MODELS = MODELS.filter(
  (m) => m.demoUrl && !m.demoUrl.startsWith('http') && !m.demoUrl.startsWith('/demos/')
);

// Screen area percentages from SVG viewBox coordinates
// MacBook: viewBox 650x400, screen rect at x=74.52 y=21.32 w=501.22 h=323.85
const MAC = { left: 11.46, top: 5.33, width: 77.11, height: 80.96 };
// iPhone: viewBox 200x400, screen rect at x=14.08 y=12.81 w=171.98 h=374.37
const PHONE = { left: 7.04, top: 3.2, width: 85.99, height: 93.59 };

const AUTO_ROTATE_MS = 4500;

export function HeroMockups() {
  const params = useParams();
  const locale = (params.locale as string) || 'pt';
  const t = useTranslations('models.card');
  const tm = useTranslations('models.items');

  const macRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [macScale, setMacScale] = useState(0.28);
  const [phoneScale, setPhoneScale] = useState(0.26);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [ready, setReady] = useState(false);

  // Compute iframe scales from rendered container sizes
  useEffect(() => {
    const update = () => {
      if (macRef.current) {
        const screenW = macRef.current.offsetWidth * (MAC.width / 100);
        setMacScale(screenW / 1440);
      }
      if (phoneRef.current) {
        const screenW = phoneRef.current.offsetWidth * (PHONE.width / 100);
        setPhoneScale(screenW / 390);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Delay iframe rendering to not block initial page load
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_MODELS.length);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(timer);
  }, [isHovered]);

  const current = CAROUSEL_MODELS[activeIndex];
  const previewUrl = `/${locale}/templates/${current.id}/preview`;

  const getIframeUrl = useCallback(
    (model: (typeof CAROUSEL_MODELS)[number]) => `/${locale}${model.demoUrl}`,
    [locale]
  );

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_MODELS.length) % CAROUSEL_MODELS.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_MODELS.length);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center lg:items-end py-4 lg:py-0">
      {/* Device showcase */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative pb-10 md:pb-14"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* === MacBook === */}
        <div
          ref={macRef}
          className="relative w-[320px] sm:w-[400px] md:w-[480px] lg:w-[520px] xl:w-[560px]"
        >
          {/* Ambient glow */}
          <div className="absolute -inset-8 rounded-3xl blur-3xl opacity-30 bg-gradient-to-br from-primary/30 via-transparent to-accent/20 pointer-events-none" />

          {/* SVG frame - base layer, dark screen serves as loading bg */}
          <MacbookPro className="relative z-[1] w-full h-auto pointer-events-none text-[#111] dark:text-[#0a0a0a] drop-shadow-2xl" />

          {/* Iframes ON TOP of SVG at screen coordinates */}
          <div
            className="absolute overflow-hidden z-[2]"
            style={{
              left: `${MAC.left}%`,
              top: `${MAC.top}%`,
              width: `${MAC.width}%`,
              height: `${MAC.height}%`,
              borderRadius: '0.8%',
            }}
          >
            {ready &&
              CAROUSEL_MODELS.map((model, i) => (
                <div
                  key={model.id}
                  className="absolute inset-0 transition-opacity duration-700 ease-out"
                  style={{ opacity: i === activeIndex ? 1 : 0 }}
                >
                  <div
                    style={{
                      width: '1440px',
                      height: '900px',
                      transform: `scale(${macScale})`,
                      transformOrigin: 'top left',
                    }}
                  >
                    <iframe
                      src={getIframeUrl(model)}
                      className="w-full h-full border-0"
                      title={model.id}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      tabIndex={-1}
                      style={{ pointerEvents: 'none' }}
                    />
                  </div>
                </div>
              ))}
          </div>

          {/* Hover overlay with CTA only */}
          <div
            className="absolute z-[3] transition-opacity duration-300"
            style={{
              left: `${MAC.left}%`,
              top: `${MAC.top}%`,
              width: `${MAC.width}%`,
              height: `${MAC.height}%`,
              borderRadius: '0.8%',
              opacity: isHovered ? 1 : 0,
              background: 'linear-gradient(135deg, rgba(0,0,0,0.15), rgba(0,0,0,0.28))',
              backdropFilter: 'blur(1px)',
            }}
          >
            {/* Center CTA */}
            <Link
              href={previewUrl}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sm font-semibold text-slate-900 shadow-2xl hover:scale-105 transition-transform"
            >
              <ExternalLink className="w-4 h-4" />
              {t('demo')}
            </Link>
          </div>

          {/* Progress bar at bottom of screen */}
          <div
            className="absolute z-[4] h-[3px] overflow-hidden pointer-events-none"
            style={{
              left: `${MAC.left}%`,
              bottom: `${100 - MAC.top - MAC.height}%`,
              width: `${MAC.width}%`,
              borderRadius: '0 0 4px 4px',
              background: 'rgba(255,255,255,0.08)',
            }}
          >
            <div
              key={activeIndex}
              className="h-full origin-left rounded-full"
              style={{
                background: 'var(--royal)',
                animation: `hero-progress ${AUTO_ROTATE_MS}ms linear forwards`,
                animationPlayState: isHovered ? 'paused' : 'running',
              }}
            />
          </div>
        </div>

        {/* === iPhone - overlapping bottom-right === */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -right-3 bottom-4 sm:-right-5 sm:bottom-2 z-[5]"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              ref={phoneRef}
              className="relative w-[100px] lg:w-[120px] xl:w-[130px]"
            >
              {/* Glow behind phone */}
              <div className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-40 bg-gradient-to-br from-primary/30 to-accent/20 pointer-events-none" />

              {/* SVG frame - base layer */}
              <Iphone16Pro className="relative z-[1] w-full h-auto pointer-events-none text-[#111] dark:text-[#0a0a0a] drop-shadow-xl" />

              {/* Iframe ON TOP of SVG at screen coordinates */}
              <div
                className="absolute overflow-hidden z-[2]"
                style={{
                  left: `${PHONE.left}%`,
                  top: `${PHONE.top}%`,
                  width: `${PHONE.width}%`,
                  height: `${PHONE.height}%`,
                  borderRadius: '14.3% / 6.6%',
                }}
              >
                {ready && (
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <div
                        style={{
                          width: '390px',
                          height: '844px',
                          transform: `scale(${phoneScale})`,
                          transformOrigin: 'top left',
                        }}
                      >
                        <iframe
                          src={getIframeUrl(current)}
                          className="w-full h-full border-0"
                          title={`${current.id} mobile`}
                          loading="lazy"
                          tabIndex={-1}
                          style={{ pointerEvents: 'none' }}
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Live preview floating badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute -left-4 top-1/4 hidden lg:block z-10"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-black/5 dark:border-white/10"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">
                {locale === 'pt' ? 'Preview ao vivo' : 'Live Preview'}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Performance badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute right-12 -top-2 hidden md:block z-10"
        >
          <motion.div
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="px-2.5 py-1.5 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-orange-500/25"
          >
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-[11px] font-bold text-white">100</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Carousel controls: model name + arrows + dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col items-center gap-3 mt-3"
      >
        {/* Model name */}
        <AnimatePresence mode="wait">
          <motion.span
            key={activeIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22 }}
            className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/35"
          >
            {tm(`${current.id}.title`)}
          </motion.span>
        </AnimatePresence>

        {/* Arrows + Dots row */}
        <div className="flex items-center gap-3">
          {/* Prev arrow */}
          <motion.button
            onClick={goPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="w-7 h-7 rounded-lg border border-foreground/10 bg-foreground/[0.04] hover:bg-foreground/[0.08] hover:border-foreground/20 flex items-center justify-center text-foreground/40 hover:text-foreground/70 transition-all duration-200 cursor-pointer"
            aria-label="Previous model"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </motion.button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {CAROUSEL_MODELS.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  width: i === activeIndex ? 24 : 6,
                  opacity: i === activeIndex ? 1 : 0.3,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`h-1.5 rounded-full cursor-pointer ${
                  i === activeIndex
                    ? 'bg-primary shadow-[0_0_6px_var(--glow-royal)]'
                    : 'bg-foreground/40'
                }`}
                style={{ width: i === activeIndex ? 24 : 6 }}
                aria-label={`Model ${i + 1}`}
              />
            ))}
          </div>

          {/* Next arrow */}
          <motion.button
            onClick={goNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="w-7 h-7 rounded-lg border border-foreground/10 bg-foreground/[0.04] hover:bg-foreground/[0.08] hover:border-foreground/20 flex items-center justify-center text-foreground/40 hover:text-foreground/70 transition-all duration-200 cursor-pointer"
            aria-label="Next model"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
