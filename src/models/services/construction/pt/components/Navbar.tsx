'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HardHat, List, X } from '@phosphor-icons/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 50],
    ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.8)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-white/10 shadow-[inset_0_-1px_0_rgba(255,255,255,0.05)]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ffde59] to-amber-500 flex items-center justify-center flex-shrink-0">
              <HardHat size={24} weight="fill" className="text-zinc-950" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Vértice<span className="text-[#ffde59]">.Eng</span>
            </span>
          </div>

          {/* Desktop Navigation - Minimal */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solucoes" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Soluções</a>
            <a href="#projetos" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Projetos</a>
            <a href="#depoimentos" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Clientes</a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button className="h-10 px-6 rounded-full bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-colors active:scale-[0.98]">
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-400 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-zinc-900 border-b border-white/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a href="#solucoes" className="block text-base font-medium text-zinc-300 hover:text-white pb-2 border-b border-white/5">Soluções</a>
            <a href="#projetos" className="block text-base font-medium text-zinc-300 hover:text-white pb-2 border-b border-white/5">Projetos</a>
            <a href="#depoimentos" className="block text-base font-medium text-zinc-300 hover:text-white pb-2 border-b border-white/5">Clientes</a>
            <button className="w-full mt-4 h-12 rounded-xl bg-[#ffde59] text-zinc-950 text-base font-semibold hover:bg-[#ffde59]/90 transition-colors active:scale-[0.98]">
              Solicitar Orçamento
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
