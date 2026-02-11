'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-28 right-6 z-30 p-3 rounded-full shadow-lg transition-all duration-500 transform border border-white/50
        bg-white/80 backdrop-blur-md text-teal-600 hover:bg-teal-500 hover:text-white hover:-translate-y-1 hover:shadow-teal-500/30
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTop;