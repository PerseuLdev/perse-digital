import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const About: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden" id="sobre">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-neutral-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          
          {/* Abstract Image Side */}
          <FadeIn direction="right" className="flex-1 w-full lg:w-1/2 relative">
             <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gold-900/10 z-10"></div>
                {/* Imagem de arquitetura/abstrata, não de pessoas */}
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="Arquitetura do escritório" 
                  className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-[2s]"
                />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/80 backdrop-blur-md border border-white/10 z-20">
                    <p className="font-serif text-2xl italic text-white leading-tight">
                        "A lei é a razão livre da paixão."
                    </p>
                    <p className="text-gold-500 text-xs mt-2 tracking-widest uppercase">— Aristóteles</p>
                </div>
             </div>
          </FadeIn>

          {/* Text Side */}
          <div className="flex-1 w-full lg:w-1/2">
            <FadeIn delay={0.2}>
                <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Nossa Filosofia</span>
                <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-[1.1]">
                  Além do <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">convencional</span>.
                </h2>
            </FadeIn>
            
            <FadeIn delay={0.4} className="space-y-8 text-neutral-400 text-lg font-light leading-relaxed">
                <p>
                  Não somos apenas um escritório de advocacia; somos arquitetos de soluções jurídicas. Em um mundo onde a complexidade é a norma, nossa missão é trazer clareza, estratégia e resultados tangíveis.
                </p>
                <div className="pl-6 border-l border-gold-500/30">
                    <p className="italic text-white/80">
                      Acreditamos que a advocacia moderna exige mais do que conhecimento técnico; exige uma compreensão profunda do negócio do cliente e da dinâmica humana.
                    </p>
                </div>
                <p>
                  Nossa atuação é pautada pela ética inegociável, pela transparência radical e pela busca incessante pela excelência. Removemos as barreiras do "juridiquês" para construir parcerias duradouras.
                </p>
            </FadeIn>
            
            <FadeIn delay={0.6} className="mt-12">
               <a href="#contato" className="group inline-flex items-center gap-2 text-white border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold">
                  Conheça nossa visão <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </a>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};