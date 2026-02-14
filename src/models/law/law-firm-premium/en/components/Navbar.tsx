'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#inicio' },
    { name: 'About', href: '#sobre' },
    { name: 'Practice Areas', href: '#areas' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center pt-6 px-4`}>
        <div className={`
          max-w-7xl w-full flex justify-between items-center px-6 py-4 rounded-full transition-all duration-500
          ${scrolled 
            ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border border-transparent'}
        `}>
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-gradient-to-br from-gold-300 to-gold-700 text-black p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-500">
               <Scale className="h-5 w-5" />
            </div>
            <span className="font-serif text-xl font-bold text-white tracking-wide">
              Carlos<span className="text-gold-500">.</span>Adv
            </span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-widest text-[11px]"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#contato"
              onClick={(e) => handleLinkClick(e, '#contato')}
              className="bg-white text-black hover:bg-gold-400 hover:text-black px-6 py-2.5 rounded-full transition-all duration-300 font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(251,185,35,0.4)]"
            >
              Consult
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl transition-transform duration-500 flex flex-col justify-center items-center ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-serif text-3xl text-white hover:text-gold-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
           <a 
              href="#contato"
              onClick={(e) => handleLinkClick(e, '#contato')}
              className="text-gold-500 text-xl font-bold uppercase tracking-widest mt-4"
            >
              Get in Touch
            </a>
        </div>
      </div>
    </>
  );
};