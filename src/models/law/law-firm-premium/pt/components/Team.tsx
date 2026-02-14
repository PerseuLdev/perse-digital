import React from 'react';
import { Linkedin, Mail, Instagram } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Team: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            {/* Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
                <FadeIn direction="up">
                    <div className="relative z-10">
                        <img 
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                            alt="Carlos Silva" 
                            className="w-full aspect-[3/4] object-cover grayscale contrast-125"
                        />
                        <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
                    </div>
                    {/* Offset Border */}
                    <div className="absolute top-4 -left-4 w-full h-full border border-gold-500/30 -z-0 hidden md:block"></div>
                </FadeIn>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-12 lg:pb-12">
                <FadeIn>
                    <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Head de Estratégia</span>
                    <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">Dr. Carlos Silva</h2>
                    <p className="text-xl text-neutral-400 font-light italic mb-8">"A defesa dos seus direitos é a minha única prioridade."</p>
                    
                    <div className="space-y-6 text-neutral-400 font-light leading-relaxed mb-10 max-w-xl">
                        <p>
                            Especialista em resoluções complexas e direito digital. Carlos combina uma formação acadêmica rigorosa com uma visão pragmática do mundo dos negócios.
                        </p>
                        <p>
                            Fundou o escritório com o objetivo de quebrar os paradigmas da advocacia tradicional, oferecendo um atendimento que une sofisticação técnica e calor humano.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="p-2 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="p-2 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="p-2 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-colors"><Mail className="w-5 h-5" /></a>
                    </div>
                </FadeIn>
            </div>

        </div>
      </div>
    </section>
  );
};