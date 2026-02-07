'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Realistic browser mockup with 3D perspective
function BrowserMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 100,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="relative w-full max-w-[520px] hidden md:block"
    >
      {/* Glow effect behind */}
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-2xl opacity-60" />

      {/* Browser frame */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/40 border border-white/10 dark:border-white/5">
        {/* Browser header */}
        <div className="bg-[#1a1a1a] dark:bg-[#0d0d0d] px-4 py-3 flex items-center gap-3 border-b border-white/5">
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          {/* URL bar */}
          <div className="flex-1 mx-4">
            <div className="bg-[#2a2a2a] dark:bg-[#1a1a1a] rounded-md px-3 py-1.5 flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-white/50 font-mono">persedigital.com.br</span>
            </div>
          </div>

          {/* Menu dots */}
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-white/30" />
            <div className="w-1 h-1 rounded-full bg-white/30" />
            <div className="w-1 h-1 rounded-full bg-white/30" />
          </div>
        </div>

        {/* Browser content */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 aspect-[16/10] relative overflow-hidden">
          {/* Hero section simulation */}
          <div className="absolute inset-0 p-6">
            {/* Nav */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
                <div className="w-16 h-2 bg-white/20 rounded" />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1.5 bg-white/15 rounded" />
                <div className="w-12 h-1.5 bg-white/15 rounded" />
                <div className="w-12 h-1.5 bg-white/15 rounded" />
                <div className="w-16 h-6 rounded-full bg-primary/80" />
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-3 bg-white/30 rounded w-4/5" />
                  <div className="h-3 bg-white/30 rounded w-3/5" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 bg-white/15 rounded w-full" />
                  <div className="h-1.5 bg-white/15 rounded w-4/5" />
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="w-20 h-6 rounded-full bg-white/90" />
                  <div className="w-16 h-6 rounded-full border border-white/30" />
                </div>
              </div>

              {/* Image placeholder */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-accent/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">P</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-12 right-12 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-16 left-8 w-10 h-10 rounded-lg bg-gradient-to-br from-violet-400 to-violet-600 shadow-lg flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Reflection */}
      <div className="absolute -bottom-16 left-0 right-0 h-16 bg-gradient-to-t from-transparent to-white/5 blur-sm transform scale-y-[-1] opacity-30 rounded-b-xl overflow-hidden" />
    </motion.div>
  );
}

// Sleek mobile mockup
function MobileMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Phone frame */}
      <div className="relative w-[180px] sm:w-[200px] md:w-[220px]">
        {/* Glow */}
        <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-primary/30 rounded-[3rem] blur-2xl opacity-50" />

        {/* Phone body */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative bg-[#1a1a1a] rounded-[2.5rem] p-1.5 shadow-2xl shadow-black/30 dark:shadow-black/50"
        >
          {/* Screen bezel */}
          <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 aspect-[9/19.5]">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20" />

            {/* Screen content */}
            <div className="absolute inset-0 pt-12 px-4 pb-8">
              {/* Status bar */}
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="text-[10px] text-white/60 font-medium">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 flex items-end gap-[1px]">
                    <div className="w-[2px] h-1 bg-white/60 rounded-full" />
                    <div className="w-[2px] h-1.5 bg-white/60 rounded-full" />
                    <div className="w-[2px] h-2 bg-white/60 rounded-full" />
                    <div className="w-[2px] h-3 bg-white/60 rounded-full" />
                  </div>
                  <div className="w-4 h-2 bg-white/60 rounded-sm" />
                </div>
              </div>

              {/* App content */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent" />
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                  </div>
                </div>

                {/* Welcome text */}
                <div className="space-y-1.5">
                  <div className="h-2 bg-white/30 rounded w-2/3" />
                  <div className="h-2 bg-white/30 rounded w-1/2" />
                </div>

                {/* Cards */}
                <div className="space-y-2">
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl p-3 border border-white/10"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-lg bg-primary/50" />
                      <div className="w-12 h-1.5 bg-white/30 rounded" />
                    </div>
                    <div className="h-1 bg-white/20 rounded w-full mb-1" />
                    <div className="h-1 bg-white/20 rounded w-3/4" />
                  </motion.div>

                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-lg bg-accent/50" />
                      <div className="w-16 h-1.5 bg-white/20 rounded" />
                    </div>
                    <div className="h-1 bg-white/15 rounded w-full mb-1" />
                    <div className="h-1 bg-white/15 rounded w-2/3" />
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-around bg-white/5 rounded-2xl p-2">
                    <div className="w-8 h-8 rounded-xl bg-primary/30 flex items-center justify-center">
                      <div className="w-4 h-4 rounded bg-primary" />
                    </div>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                      <div className="w-4 h-4 rounded bg-white/20" />
                    </div>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                      <div className="w-4 h-4 rounded bg-white/20" />
                    </div>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Phone buttons */}
        <div className="absolute -right-0.5 top-24 w-1 h-8 bg-[#2a2a2a] rounded-l" />
        <div className="absolute -right-0.5 top-36 w-1 h-12 bg-[#2a2a2a] rounded-l" />
        <div className="absolute -left-0.5 top-28 w-1 h-6 bg-[#2a2a2a] rounded-r" />
        <div className="absolute -left-0.5 top-40 w-1 h-6 bg-[#2a2a2a] rounded-r" />
      </div>
    </motion.div>
  );
}

// Floating UI elements
function FloatingElements() {
  return (
    <>
      {/* Notification card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-4 top-1/4 hidden lg:block z-20"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl shadow-black/10 dark:shadow-black/30 border border-black/5 dark:border-white/10 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Site publicado!</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Agora mesmo</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-4 bottom-1/4 hidden lg:block z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl shadow-black/10 dark:shadow-black/30 border border-black/5 dark:border-white/10 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">+340%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Conversões</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Speed indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-8 top-8 hidden md:block z-20"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-3 shadow-lg shadow-orange-500/25"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-bold text-white">100</span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export function HeroMockups() {
  return (
    <div className="relative w-full flex items-center justify-center lg:justify-end py-8 lg:py-0">
      {/* Container with perspective */}
      <div className="relative" style={{ perspective: '1200px' }}>
        {/* Browser - Desktop only */}
        <div className="hidden md:block">
          <BrowserMockup />
        </div>

        {/* Mobile - Positioned to overlap on desktop, centered on mobile */}
        <div className="md:absolute md:-right-8 md:-bottom-8 lg:-right-4 lg:bottom-4 flex justify-center md:justify-end">
          <MobileMockup />
        </div>

        {/* Floating elements */}
        <FloatingElements />
      </div>
    </div>
  );
}
