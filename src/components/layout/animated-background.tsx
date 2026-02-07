'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <svg
          className="absolute w-full h-full opacity-30 dark:opacity-20"
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
                className="text-primary/20"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.50 0.18 260 / 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.65 0.15 245 / 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 100, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.55 0.12 280 / 0.2) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
    </div>
  );
}
