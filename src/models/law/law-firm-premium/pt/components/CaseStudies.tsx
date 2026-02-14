'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

const cases = [
  {
    category: "Direito Trabalhista",
    title: "Reversão de Justa Causa",
    result: "R$ 150.000,00",
    description: "Conseguimos reverter uma demissão por justa causa indevida para um executivo sênior, garantindo todas as verbas rescisórias e indenização por danos morais.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
  },
  {
    category: "Direito Civil",
    title: "Indenização Imobiliária",
    result: "Acordo Favorável",
    description: "Atraso na entrega de imóvel de alto padrão. Obtivemos indenização pelos lucros cessantes e danos materiais para o proprietário em tempo recorde.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
  },
  {
    category: "Direito Digital",
    title: "Recuperação de Conta",
    result: "Liminar em 24h",
    description: "Recuperação de conta comercial no Instagram com mais de 500k seguidores após hackeamento, com pedido de urgência deferido pelo tribunal.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
  }
];

export const CaseStudies: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((curr) => (curr + 1) % cases.length);
  const prev = () => setCurrent((curr) => (curr - 1 + cases.length) % cases.length);

  return (
    <section className="py-16 md:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <FadeIn>
                <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-3 block">Track Record</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">O que temos feito</h2>
            </FadeIn>
            <div className="flex gap-4">
                <button onClick={prev} className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors text-white">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <button onClick={next} className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors text-white">
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>

        <div className="relative overflow-hidden min-h-[500px]">
            <div 
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {cases.map((c, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/5 bg-neutral-900/20">
                        <div className="relative h-[300px] lg:h-auto overflow-hidden group">
                            <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>
                        <div className="p-12 flex flex-col justify-center">
                            <span className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-4">{c.category}</span>
                            <h3 className="text-3xl font-serif text-white mb-2">{c.title}</h3>
                            <p className="text-white/60 font-mono text-sm mb-6 pb-6 border-b border-white/10">Resultado: <span className="text-white">{c.result}</span></p>
                            <p className="text-neutral-400 font-light leading-relaxed mb-8">
                                {c.description}
                            </p>
                            <a href="#contato" className="inline-flex items-center gap-2 text-white hover:text-gold-500 transition-colors uppercase text-xs font-bold tracking-widest">
                                Discutir caso similar <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};