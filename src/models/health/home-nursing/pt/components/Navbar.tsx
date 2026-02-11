'use client';


import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bloqueia o scroll do corpo quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const contactLink = "https://wa.me/5514991071072?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20de%20enfermagem.";

  const navLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Sobre Mim', id: 'sobre' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Valores', id: 'planos' },
    { name: 'Contato', id: 'contato' },
  ];

  // Classes dinâmicas baseadas no scroll
  const navBackgroundClass = isScrolled 
    ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-emerald-100/50 py-3' 
    : 'bg-transparent py-5 border-b border-transparent';
    
  const textColorClass = isScrolled ? 'text-slate-800' : 'text-white';
  const logoColorClass = isScrolled ? 'text-emerald-600' : 'text-emerald-400';
  const buttonClass = isScrolled 
    ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-200' 
    : 'bg-white text-emerald-700 hover:bg-emerald-50 shadow-black/10';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        {/* Top Bar - Informações de contato e Status */}
        <div className={`hidden md:block bg-emerald-950 text-white/80 transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 py-2.5 opacity-100'}`}>
          <div className="container mx-auto px-4 md:px-8 flex justify-between items-center text-xs tracking-wide font-medium">
            <div className="flex gap-6 items-center">
              <a href={contactLink} target="_blank" className="flex items-center gap-2 hover:text-white transition-colors group">
                <div className="bg-emerald-500/20 p-1 rounded-full group-hover:bg-emerald-500 transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                (14) 99107-1072
              </a>
              <span className="w-px h-3 bg-white/20"></span>
              <span className="text-emerald-200">Enfermagem Humanizada & Domiciliar</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="bg-emerald-900/50 px-3 py-0.5 rounded-full border border-emerald-500/30 text-[10px] font-bold uppercase tracking-widest text-emerald-100">
                COREN Ativo
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className={`transition-all duration-500 ${navBackgroundClass}`}>
          <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
            
            {/* Logo Area */}
            <a href="#" onClick={(e) => handleNavClick(e, 'inicio')} className="flex items-center gap-2.5 group z-50 relative">
              <div className={`relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${isScrolled ? 'bg-emerald-50' : 'bg-white/10 backdrop-blur-sm'}`}>
                <svg className={`w-6 h-6 transition-colors duration-300 ${logoColorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 6v12m-6-6h12" /> {/* Cross shape */}
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-serif font-bold leading-none tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                  Home Care
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${isScrolled ? 'text-emerald-600' : 'text-emerald-200'}`}>
                  Enfermagem
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-8">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`text-sm font-semibold tracking-wide relative group py-2 transition-colors ${textColorClass}`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full ${isScrolled ? 'bg-emerald-500' : 'bg-white'}`}></span>
                  </a>
                ))}
              </div>
              
              <a 
                href={contactLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md hover:scale-105 active:scale-95 flex items-center gap-2 ${buttonClass}`}
              >
                <span>Falar Comigo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 rounded-full transition-colors z-50 relative ${isScrolled || isMenuOpen ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className={`h-0.5 rounded-full transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 translate-y-2 bg-slate-800' : 'w-6 ' + (isScrolled ? 'bg-slate-800' : 'bg-white')}`}></span>
                <span className={`h-0.5 rounded-full transition-all duration-300 ${isMenuOpen ? 'w-0 opacity-0' : 'w-4 ' + (isScrolled ? 'bg-slate-800' : 'bg-white')}`}></span>
                <span className={`h-0.5 rounded-full transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 -translate-y-2.5 bg-slate-800' : 'w-6 ' + (isScrolled ? 'bg-slate-800' : 'bg-white')}`}></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col justify-center items-center ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
        
        <nav className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={`#${link.id}`}
              className={`text-2xl font-serif font-bold text-slate-800 hover:text-emerald-600 transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.name}
            </a>
          ))}
          
          <div 
            className={`w-full max-w-xs mt-8 transition-all duration-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <a 
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-emerald-600/20 active:scale-95 transition-transform"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Falar no WhatsApp
            </a>
            
            <p className="text-center mt-6 text-slate-400 text-sm">
              Atendimento 24h para emergências
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
