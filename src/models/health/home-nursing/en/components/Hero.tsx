
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  const contactLink = "https://wa.me/5514991071072?text=Hello!%20I'd%20like%20to%20schedule%20an%20evaluation%20for%20nursing%20services.";

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Edge-to-Edge Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop"
          alt="Nurse holding hands with elderly patient"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          style={{ animationDuration: '20s' }}
        />
        {/* Base darkening layer */}
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
        {/* Main gradient for text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-emerald-950/80 to-transparent"></div>
        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10 opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl text-white">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-emerald-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-8 animate-fadeIn shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Humanized Home Nursing
          </div>

          {/* Main Title with Strong Hierarchy */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight animate-fadeIn drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
            Care, respect and <br className="block md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-500">
              dedication in your home.
            </span>
          </h1>

          {/* Subtitle with weight contrast */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-200/90 mb-10 md:mb-12 font-light leading-relaxed max-w-2xl animate-fadeIn drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            I offer technical nursing support and specialized care.
            <strong className="block mt-2 font-semibold text-white">Safety and professional care for your loved ones.</strong>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <a
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg text-center transition-all shadow-xl shadow-emerald-900/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 border border-emerald-500/50"
            >
              Request Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className="bg-white/5 hover:bg-white/15 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg text-center transition-all hover:border-white/40"
            >
              View Services
            </a>
          </div>

          {/* Social Proof / Stats */}
          <div className="grid grid-cols-3 gap-6 md:flex md:gap-12 border-t border-white/10 pt-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">+10</span>
              <span className="text-xs text-emerald-200/80 uppercase tracking-widest font-semibold mt-1">Years Experience</span>
            </div>
            <div className="flex flex-col border-l border-white/10 pl-6 md:pl-12">
              <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">24/7</span>
              <span className="text-xs text-emerald-200/80 uppercase tracking-widest font-semibold mt-1">Availability</span>
            </div>
            <div className="flex flex-col border-l border-white/10 pl-6 md:pl-12">
              <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">RN</span>
              <span className="text-xs text-emerald-200/80 uppercase tracking-widest font-semibold mt-1">Licensed Nurse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;