'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Vocês aceitam convênios odontológicos?",
    answer: "Trabalhamos predominantemente com atendimento particular para garantir a máxima qualidade e tempo dedicado a cada paciente. No entanto, oferecemos suporte total para reembolso junto ao seu convênio, emitindo toda a documentação necessária."
  },
  {
    question: "O tratamento com implantes é doloroso?",
    answer: "Não. Utilizamos técnicas minimamente invasivas e anestesia digital computadorizada. O pós-operatório costuma ser muito tranquilo, e prescrevemos toda a medicação necessária para seu conforto."
  },
  {
    question: "Quanto tempo dura o clareamento dental?",
    answer: "A durabilidade varia conforme os hábitos alimentares e higiene do paciente, mas geralmente os resultados se mantêm estáveis por 1 a 3 anos. Recomendamos manutenções periódicas."
  },
  {
    question: "É possível parcelar o tratamento?",
    answer: "Sim! Oferecemos condições facilitadas de pagamento, incluindo parcelamento no cartão de crédito e boleto bancário, para que você possa realizar seu sonho do sorriso perfeito sem pesar no orçamento."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Dúvidas Frequentes</h2>
          <p className="text-slate-600">Esclareça os principais pontos sobre nossos atendimentos.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button 
                className="w-full flex justify-between items-center p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-teal-600" size={20} />
                ) : (
                  <ChevronDown className="text-slate-400" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
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