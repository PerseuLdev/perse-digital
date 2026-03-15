'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Are the procedures safe?',
    answer:
      'Yes. All our treatments use certified products and are performed by qualified professionals. We conduct a detailed assessment before any procedure to ensure your safety.',
  },
  {
    question: 'Will facial harmonization look natural?',
    answer:
      'Absolutely. Our philosophy is natural-looking results. We work with subtle volumes and conservative techniques to enhance your features without altering your identity. The result should look like you — just more rested and radiant.',
  },
  {
    question: 'How long do results last?',
    answer:
      'It depends on the procedure. Botulinum toxin lasts an average of 4 to 6 months, fillers 12 to 18 months, and collagen biostimulators have effects that develop over months and last for years.',
  },
  {
    question: 'How does booking work?',
    answer:
      'You can book directly via our WhatsApp or through the booking button on this page. We offer a free initial assessment to understand your goals and recommend the ideal protocol.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C89B6B] mb-2">FAQ</h2>
          <h3 className="text-3xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-stone-600">Clarify the main points about our services.</p>
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
