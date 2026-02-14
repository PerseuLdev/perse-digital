'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-sm text-white hover:border-gold-500/50 hover:text-gold-500 transition-all duration-300 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={2} />

      {/* Gold glow on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold-600/20 to-gold-400/20 rounded-sm blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </button>
  );
};
