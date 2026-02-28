'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';

const faqs = [
  {
    question: 'A construtora assume o risco de custos extras durante a obra?',
    answer: 'Sim, no nosso modelo "Turnkey" (Chave na Mão), assinamos um contrato de risco fechado. Se houver variação no preço do aço ou do cimento, a Vértice.Eng absorve a diferença. O valor do contrato é exatamente o que você pagará.'
  },
  {
    question: 'Como funciona a garantia da construção?',
    answer: 'Oferecemos 5 anos de garantia estrutural completa. Para acabamentos (pintura, revestimentos), a garantia segue as normas da ABNT. Tudo é entregue documentado no Manual do Proprietário ao final da obra.'
  },
  {
    question: 'E se eu já tiver o projeto de arquitetura pronto?',
    answer: 'Excelente! Nós fazemos a etapa de orçamento e compatibilização estrutural. Trabalhamos em total sinergia com o arquiteto escolhido por você, garantindo que o design pensado não sofra alterações pela engenharia.'
  },
  {
    question: 'Vocês realizam obras fora do estado de São Paulo?',
    answer: 'Atualmente nosso raio de atuação é em um raio de até 200km da capital de São Paulo para obras residenciais, e em todo o sul e sudeste para desenvolvimento e execução de galpões e infraestrutura comercial.'
  },
  {
    question: 'Como posso acompanhar minha obra se eu viajar?',
    answer: 'Você não precisa estar no canteiro. Utilizamos um software de gestão próprio onde você recebe relatórios semanais com fotos, vídeos de drone e gráficos de avanço financeiro e físico, tudo acessível no seu celular.'
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-24 sm:py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-zinc-400">
            A transparência total é o alicerce de tudo o que construímos.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen ? 'bg-zinc-900 border-white/10' : 'bg-transparent border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-base md:text-lg font-semibold tracking-tight pr-8 ${isOpen ? 'text-white' : 'text-zinc-300'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white/10 text-white' : 'bg-zinc-900 border border-white/5 text-zinc-500'}`}>
                    <CaretDown size={16} weight="bold" />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 text-zinc-400 leading-relaxed text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </div>
  );
}
