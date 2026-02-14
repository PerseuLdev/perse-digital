import React from 'react';
import { CheckCircle, Zap, Monitor, ArrowRight, MousePointer2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      
      {/* Background Layer with Parallax-like feel */}
      <div className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10"></div>
        
        {/* Glow Effect Top Left */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>

        <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2700&q=80"
            alt="Law and Justice"
            className="w-full h-full object-cover opacity-50 scale-105"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        {/* Main Typography Column */}
        <div className="lg:col-span-8 flex flex-col justify-center min-h-[60vh]">
            
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium text-white mb-8 leading-[1.05] tracking-tight opacity-0 animate-[slideUp_1s_ease-out_0.2s_forwards]">
                Defesa <span className="italic font-light text-neutral-400">dedicada</span>.<br />
                Sem burocracia.<br />
                <span className="gold-text-gradient font-bold">Resultado Real.</span>
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light opacity-0 animate-[slideUp_1s_ease-out_0.4s_forwards]">
                Uma abordagem moderna para o direito. Fale diretamente com quem resolve, com agilidade digital e linguagem humana.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-[slideUp_1s_ease-out_0.6s_forwards]">
                <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-white text-black overflow-hidden rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-300"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Falar com um Advogado <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
                
                <a 
                    href="#areas" 
                    onClick={(e) => handleLinkClick(e, '#areas')}
                    className="group flex items-center gap-2 px-8 py-4 text-white font-medium text-sm uppercase tracking-widest border border-white/20 rounded-full hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm"
                >
                    Conhecer Áreas
                </a>
            </div>
        </div>

        {/* Floating Glass Stats Column */}
        <div className="lg:col-span-4 lg:mb-12 space-y-4 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                    <Zap className="w-6 h-6 text-gold-500 group-hover:scale-110 transition-transform duration-500" />
                    <span className="text-4xl font-serif text-white">24h</span>
                </div>
                <p className="text-neutral-400 text-xs uppercase tracking-widest">Tempo médio de resposta</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-colors group">
                 <div className="flex justify-between items-start mb-2">
                    <Monitor className="w-6 h-6 text-gold-500 group-hover:scale-110 transition-transform duration-500" />
                    <span className="text-4xl font-serif text-white">100%</span>
                </div>
                <p className="text-neutral-400 text-xs uppercase tracking-widest">Processos Digitais</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-colors group">
                 <div className="flex justify-between items-start mb-2">
                    <MousePointer2 className="w-6 h-6 text-gold-500 group-hover:scale-110 transition-transform duration-500" />
                    <span className="text-white font-medium text-lg">Online</span>
                </div>
                <p className="text-neutral-400 text-xs uppercase tracking-widest">Atendimento em todo Brasil</p>
            </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>

      <style>{`
        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};