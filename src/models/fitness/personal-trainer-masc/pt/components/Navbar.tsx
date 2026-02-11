import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'planos', label: 'Planos' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="flex items-center gap-3">
              <div className={`text-2xl md:text-3xl font-display font-bold tracking-tight transition-colors ${isScrolled ? 'text-orange-600' : 'text-white'}`}>
                FITPRO
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`font-semibold text-sm transition-all hover:scale-105 ${isScrolled ? 'text-slate-700 hover:text-orange-600' : 'text-white hover:text-orange-400'}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={(e) => scrollToSection(e, 'contato')}
                className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all hover:scale-105 active:scale-95"
              >
                Comece Agora
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[99] bg-slate-900/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-white text-2xl font-bold hover:text-orange-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => scrollToSection(e, 'contato')}
              className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-lg font-bold text-xl transition-all"
            >
              Comece Agora
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
