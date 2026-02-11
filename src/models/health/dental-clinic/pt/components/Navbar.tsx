'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, SmilePlus, Phone } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  onOpenSchedule: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Tratamentos', href: '#services' },
    { name: 'Equipe', href: '#team' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`
          rounded-full px-6 py-3 flex justify-between items-center transition-all duration-500 border
          ${scrolled 
            ? 'bg-white/70 backdrop-blur-xl backdrop-saturate-150 border-white/40 shadow-lg shadow-black/5' 
            : 'bg-white/10 backdrop-blur-sm border-white/10 shadow-sm'
          }
        `}>
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className={`flex items-center gap-2 transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-white'}`}
          >
            <div className={`p-2 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'bg-gradient-to-tr from-teal-500 to-emerald-500 text-white shadow-md' 
                : 'bg-white/20 text-white backdrop-blur-md border border-white/20'
            }`}>
              <SmilePlus size={24} />
            </div>
            <span className="text-xl font-bold tracking-wide">Odonto Perse</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  scrolled 
                    ? 'text-slate-600 hover:text-teal-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Quick Link - Emergency */}
            <a 
                href="tel:+5511999999999" 
                className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${
                    scrolled ? 'text-red-500 hover:text-red-600' : 'text-red-300 hover:text-red-200'
                }`}
            >
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                Emergência
            </a>

            <div onClick={onOpenSchedule}>
              <Button 
                variant={scrolled ? 'primary' : 'secondary'} 
                className={`!px-6 !py-2 text-sm shadow-sm transition-all duration-300 ${
                  !scrolled ? '!bg-white/10 !text-white !border-white/20 hover:!bg-white hover:!text-teal-600' : ''
                }`}
              >
                Agendar
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-full transition-colors ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`
        absolute top-full left-4 right-4 mt-2 bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-white/50 rounded-3xl p-6 shadow-2xl lg:hidden transform transition-all duration-300 origin-top z-50
        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
      `}>
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-700 hover:text-teal-600 text-lg font-medium text-center py-3 border-b border-slate-100/50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          
          <a href="tel:+5511999999999" className="flex items-center justify-center gap-2 text-red-500 font-bold py-2">
            <Phone size={18} /> Emergência 24h
          </a>

          <div onClick={() => { setIsOpen(false); onOpenSchedule(); }} className="w-full mt-2">
            <Button variant="primary" className="w-full">
              Agendar Agora
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;