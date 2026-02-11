'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Offset calculation to account for the fixed navbar height
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Methodology', href: '#method' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-brand-black/95 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tighter text-white">
            <Dumbbell className="text-brand-orange" size={32} strokeWidth={2.5} />
            MUSCLE<span className="text-brand-orange">PERSE</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-heading uppercase text-sm tracking-widest text-gray-400 hover:text-brand-orange transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-white text-black font-heading font-bold uppercase text-xs px-6 py-3 hover:bg-brand-orange hover:text-white transition-colors cursor-pointer"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-white hover:text-brand-orange transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-brand-black flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-brand-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-heading font-bold text-3xl uppercase text-white hover:text-brand-orange transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="font-heading font-bold text-3xl uppercase text-brand-orange mt-4 cursor-pointer"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
