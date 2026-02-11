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

  const contactLink = "https://wa.me/5514991071072?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20treinos%20personalizados.";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-600/40 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl text-white">
          <div className="inline-block px-4 py-1 bg-orange-600/30 backdrop-blur-md rounded-full text-orange-100 text-xs md:text-sm font-semibold mb-6 border border-orange-400/20 animate-fadeIn">
            Personal Trainer Profissional
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold mb-6 leading-none animate-fadeIn tracking-tight" style={{ animationDelay: '0.1s' }}>
            TRANSFORME <br className="hidden md:block" />SEU CORPO,<br />
            <span className="text-orange-500">TRANSFORME SUA VIDA.</span>
          </h1>

          <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-2xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Treinos personalizados, acompanhamento profissional e resultados reais. Compromisso com sua evolução e transformação física.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <a
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-xl shadow-orange-900/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Comece Sua Transformação
            </a>
            <a
              href="#servicos"
              onClick={(e) => scrollToSection(e, 'servicos')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-center transition-all"
            >
              Ver Serviços
            </a>
          </div>

          <div className="grid grid-cols-3 gap-2 md:flex md:gap-10 border-t border-white/10 pt-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-3xl md:text-4xl font-display font-bold text-orange-500">+500</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Alunos Transformados</span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-l border-white/10 md:border-none">
              <span className="text-3xl md:text-4xl font-display font-bold text-orange-500">10+</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Anos de Experiência</span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-l border-white/10 md:border-none">
              <span className="text-3xl md:text-4xl font-display font-bold text-orange-500">100%</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Resultados Reais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
