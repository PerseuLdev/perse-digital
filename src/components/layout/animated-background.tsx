'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function AnimatedBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const isStatic = isMobile || !!shouldReduceMotion;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base: off-white azulado no light, preto no dark */}
      <div className="absolute inset-0 bg-[#f4f9ff] dark:bg-[#000000]" />

      {/* Gradient tonal suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/8 dark:to-primary/5" />

      {/* Grid pattern */}
      <div className="absolute inset-0">
        <svg
          className="absolute w-full h-full opacity-[0.12] dark:opacity-[0.08]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Orb 1 — top left */}
      <motion.div
        animate={isStatic ? undefined : { x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={isStatic ? undefined : { duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[5%] left-[5%] w-[600px] h-[600px] rounded-full opacity-40 dark:opacity-25"
        style={{
          background: 'radial-gradient(circle, #38b6ff 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Orb 2 — bottom right */}
      <motion.div
        animate={isStatic ? undefined : { x: [0, -80, 0], y: [0, 80, 0], scale: [1, 1.3, 1] }}
        transition={isStatic ? undefined : { duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[5%] right-[5%] w-[700px] h-[700px] rounded-full opacity-30 dark:opacity-20"
        style={{
          background: 'radial-gradient(circle, #38b6ff 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Orb 3 — center right */}
      <motion.div
        animate={isStatic ? undefined : { x: [0, 60, 0], y: [0, 100, 0], scale: [1, 0.9, 1] }}
        transition={isStatic ? undefined : { duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[35%] right-[15%] w-[450px] h-[450px] rounded-full opacity-20 dark:opacity-15"
        style={{
          background: 'radial-gradient(circle, #1a8fd4 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Vinheta nas bordas — suave no light, mais forte no dark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,var(--background)_100%)] opacity-60 dark:opacity-80" />
    </div>
  );
}
