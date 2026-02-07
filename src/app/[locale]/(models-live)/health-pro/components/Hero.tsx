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

  const contactLink = "https://wa.me/5514991071072?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20para%20serviços%20de%20cuidador.";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-emerald-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800"></div>
        {/* Efeito sutil de iluminação para dar profundidade sem usar imagem */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/30 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-2xl text-white">
          <div className="inline-block px-4 py-1 bg-emerald-500/30 backdrop-blur-md rounded-full text-emerald-100 text-xs md:text-sm font-semibold mb-6 border border-white/10 animate-fadeIn">
            Enfermagem Domiciliar Humanizada
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            Cuidado, respeito e <br className="block md:hidden" /> <span className="text-emerald-300">dedicação no seu lar.</span>
          </h1>
          
          <p className="text-base md:text-xl text-emerald-50/80 mb-8 md:mb-10 leading-relaxed max-w-xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Ofereço suporte técnico de enfermagem e cuidados especializados. Segurança e carinho profissional para quem você mais ama.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <a 
              href={contactLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-xl shadow-emerald-900/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="#servicos" 
              onClick={(e) => scrollToSection(e, 'servicos')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-center transition-all"
            >
              Meus Serviços
            </a>
          </div>

          <div className="grid grid-cols-3 gap-2 md:flex md:gap-10 border-t border-white/10 pt-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-2xl md:text-3xl font-bold text-emerald-300">+10</span>
              <span className="text-[10px] text-emerald-100/60 uppercase tracking-widest font-bold">Anos de Experiência</span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-l border-white/10 md:border-none">
              <span className="text-2xl md:text-3xl font-bold text-emerald-300">24h</span>
              <span className="text-[10px] text-emerald-100/60 uppercase tracking-widest font-bold">Disponibilidade</span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-l border-white/10 md:border-none">
              <span className="text-2xl md:text-3xl font-bold text-emerald-300">COREN</span>
              <span className="text-[10px] text-emerald-100/60 uppercase tracking-widest font-bold">Registro Ativo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;