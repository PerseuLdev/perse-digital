'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from './FadeIn';

const testimonials = [
  {
    name: "Mariana Souza",
    role: "CEO, StartTech",
    text: "A atenção e o profissionalismo do Dr. Carlos foram essenciais. O atendimento online foi extremamente prático e resolveu uma questão contratual complexa em dias.",
  },
  {
    name: "Roberto Almeida",
    role: "Engenheiro Civil",
    text: "Impressionante a agilidade. Em poucos dias tivemos um direcionamento claro para o meu processo. Recomendo fortemente pela transparência.",
  },
  {
    name: "Dr. Fernanda Lima",
    role: "Diretora Clínica",
    text: "Senti muita segurança em deixar meu caso nas mãos dele. A comunicação é fluida, sem juridiquês desnecessário. Um parceiro de verdade.",
  }
];

export const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-32 bg-neutral-950 relative overflow-hidden" id="depoimentos">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] text-white/[0.02] font-serif font-bold pointer-events-none">
        "
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <FadeIn>
            <div className="flex justify-center mb-8">
                <Quote className="w-12 h-12 text-gold-500 opacity-50" />
            </div>
            
            <div className="h-[300px] md:h-[250px] relative">
                {testimonials.map((t, i) => (
                    <div 
                        key={i}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col items-center justify-center ${
                            i === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                        }`}
                    >
                        <h3 className="text-xl md:text-4xl font-serif text-white leading-relaxed mb-8 italic">
                        "{t.text}"
                        </h3>
                        <div>
                            <p className="text-gold-500 font-bold uppercase tracking-widest text-sm">{t.name}</p>
                            <p className="text-neutral-500 text-xs mt-1">{t.role}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === active ? 'bg-gold-500 w-8' : 'bg-neutral-800 hover:bg-neutral-600'
                        }`}
                    />
                ))}
            </div>
        </FadeIn>
      </div>
    </section>
  );
};