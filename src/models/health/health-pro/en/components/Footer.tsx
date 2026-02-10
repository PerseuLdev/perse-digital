
import React from 'react';

const Footer: React.FC = () => {
  const contactLink = "https://wa.me/5514991071072?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center font-bold text-sm shadow-lg">Enf.</div>
              <span className="text-3xl font-serif font-bold tracking-tight">Home Care</span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm">
              Sua família em boas mãos. Profissional qualificado para oferecer conforto, segurança e qualidade de vida no seu lar.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-sm">Acesso Rápido</h4>
            <div className="flex flex-col items-center gap-4 text-slate-300 font-medium">
              <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="hover:text-emerald-400 transition-colors">Início</a>
              <a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')} className="hover:text-emerald-400 transition-colors">Sobre Mim</a>
              <a href="#servicos" onClick={(e) => handleNavClick(e, 'servicos')} className="hover:text-emerald-400 transition-colors">Serviços</a>
              <a href="#planos" onClick={(e) => handleNavClick(e, 'planos')} className="hover:text-emerald-400 transition-colors">Valores</a>
              <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')} className="hover:text-emerald-400 transition-colors">Fale Comigo</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
            <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-sm">Atendimento</h4>
            <p className="text-slate-400 text-base leading-relaxed">
              Precisando de ajuda agora? <br className="hidden md:block"/> Estou online.
            </p>
            <a 
              href={contactLink} 
              target="_blank" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-emerald-900/40 hover:scale-105"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
          <p>© 2024 - Enfermagem Domiciliar Profissional. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              Atendimento Ativo
            </span>
            <a href="tel:5514991071072" className="hover:text-slate-300">(14) 99107-1072</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
