'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FadeIn } from './FadeIn';

const faqs = [
  { q: "O atendimento é 100% online?", a: "Sim. Utilizamos videochamadas, WhatsApp e e-mail para garantir agilidade, mas podemos agendar reuniões presenciais se necessário." },
  { q: "Como funciona a cobrança de honorários?", a: "Trabalhamos com total transparência. Dependendo do caso, pode ser um valor fixo, mensal ou êxito (porcentagem ao final). Tudo acordado em contrato prévio." },
  { q: "Quanto tempo demora meu processo?", a: "O tempo judicial varia, mas nossa parte é imediata. Protocolamos ações em até 48h após o recebimento da documentação completa." },
  { q: "Atendem em quais estados?", a: "Graças ao processo eletrônico, atuamos em todo o território nacional com a mesma eficácia." },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Dúvidas Frequentes</h2>
            <p className="text-neutral-500 font-light">Respostas diretas para suas principais questões.</p>
        </FadeIn>

        <div className="space-y-4">
            {faqs.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                    <div className={`border-b border-neutral-800 ${openIndex === i ? 'bg-neutral-900/30' : ''} transition-colors rounded-sm`}>
                        <button 
                            className="w-full py-6 px-4 flex justify-between items-center text-left focus:outline-none group"
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            <span className={`text-lg font-medium ${openIndex === i ? 'text-white' : 'text-neutral-400 group-hover:text-white'} transition-colors`}>
                                {item.q}
                            </span>
                            {openIndex === i ? <Minus className="text-gold-500 w-5 h-5" /> : <Plus className="text-neutral-600 w-5 h-5 group-hover:text-white" />}
                        </button>
                        <div 
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openIndex === i ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <p className="px-4 text-neutral-400 font-light leading-relaxed">
                                {item.a}
                            </p>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};