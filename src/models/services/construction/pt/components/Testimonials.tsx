'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from '@phosphor-icons/react';

const testimonials = [
  {
    text: "Já havia construído antes e foi um pesadelo. Com a Vértice, a experiência foi o completo oposto. Eles assumiram os problemas e me entregaram a casa 15 dias antes do prazo acordado.",
    author: "Ricardo Mendes",
    role: "Proprietário, Mansão Alphaville",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    text: "O nível de detalhe e acabamento impressiona. Como arquiteta, sempre recomendo a Vértice para meus clientes porque sei que meu projeto será executado milimetricamente como desenhei.",
    author: "Sabrina Costa",
    role: "SC Arquitetura",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=9"
  },
  {
    text: "A transparência no orçamento foi fundamental. Toda semana eu recebia um relatório claro do que foi comprado e do avanço físico na obra. Zero dores de cabeça com equipe.",
    author: "Fernando Almeida",
    role: "Investidor Imobiliário",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=60"
  },
  {
    text: "Reformamos o escritório inteiro da empresa com a equipe operando em horário comercial reduzido. A organização e limpeza do canteiro de obras eram de outro mundo.",
    author: "Marina Linhares",
    role: "CEO, TechLumi",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=47"
  }
];

export function Testimonials() {
  return (
    <div className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[500px] bg-[#ffde59]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              A diferença entre prometer e <span className="text-[#ffde59]">entregar</span>.
            </h2>
            <p className="text-lg text-zinc-400">
              Não acredite apenas em nossas palavras. Veja o que dizem as pessoas que escolheram a Vértice para tirar seus maiores sonhos do papel.
            </p>
          </div>
          <button className="h-12 px-6 rounded-full bg-white/5 text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-all active:scale-[0.98] whitespace-nowrap hidden md:block">
            Ver Todos os Cases
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full"
            >
              <div className="flex items-center gap-1 mb-6 text-[#ffde59]">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} weight="fill" />
                ))}
              </div>
              
              <blockquote className="text-zinc-300 leading-relaxed text-sm flex-grow mb-8">
                "{t.text}"
              </blockquote>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.image} 
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">{t.author}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="mt-12 h-12 px-6 rounded-full w-full bg-white/5 text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-all active:scale-[0.98] md:hidden">
          Ver Todos os Cases
        </button>

      </div>
    </div>
  );
}
