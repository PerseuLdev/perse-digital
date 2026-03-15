'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Os procedimentos são seguros?',
    answer:
      'Sim. Todos os nossos tratamentos utilizam produtos regularizados pela ANVISA e são realizados por profissionais habilitados. Passamos por avaliação detalhada antes de qualquer procedimento para garantir sua segurança.',
  },
  {
    question: 'A harmonização facial fica com aspecto natural?',
    answer:
      'Absolutamente. Nossa filosofia é a naturalidade. Trabalhamos com volumes sutis e técnicas conservadoras para realçar seus traços sem alterar sua identidade. O resultado deve ser você, mais descansada e radiante.',
  },
  {
    question: 'Quanto tempo duram os resultados?',
    answer:
      'Depende do procedimento. Toxina botulínica dura em média 4 a 6 meses, preenchimentos de 12 a 18 meses, e bioestimuladores de colágeno têm efeitos que se desenvolvem ao longo de meses e duram anos.',
  },
  {
    question: 'Como funciona o agendamento?',
    answer:
      'Você pode agendar diretamente pelo nosso WhatsApp ou pelo botão de agendamento nesta página. Realizamos uma avaliação inicial gratuita para entender seus objetivos e indicar o protocolo ideal.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C89B6B] mb-2">FAQ</h2>
          <h3 className="text-3xl font-bold text-stone-900 mb-4">Dúvidas Frequentes</h3>
          <p className="text-stone-600">Esclareça os principais pontos sobre nossos atendimentos.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-stone-200 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-6 bg-stone-50 hover:bg-stone-100 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-stone-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#C89B6B] flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-stone-400 flex-shrink-0" size={20} />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 text-stone-600 bg-white border-t border-stone-100 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
