import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-40 overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")' }}>
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
                A justiça não pode esperar.<br/>
                <span className="italic text-gold-500">Nem você.</span>
            </h2>
            <p className="text-neutral-300 text-lg mb-12 font-light max-w-2xl mx-auto">
                Agende uma consulta inicial sem compromisso e entenda seus direitos com clareza imediata.
            </p>
            <a 
                href="#contato" 
                className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
                Falar com Advogado <ArrowRight className="w-5 h-5" />
            </a>
        </FadeIn>
      </div>
    </section>
  );
};