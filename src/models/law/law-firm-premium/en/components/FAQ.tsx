'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FadeIn } from './FadeIn';

const faqs = [
  { q: "Is the consultation 100% online?", a: "Yes. We use video calls, WhatsApp, and email to ensure speed, but we can schedule in-person meetings if necessary." },
  { q: "How does fee charging work?", a: "We work with total transparency. Depending on the case, it could be a fixed value, monthly, or success-based (percentage at the end). Everything is agreed upon in a prior contract." },
  { q: "How long does my process take?", a: "Judicial time varies, but our part is immediate. We file actions within 48 hours after receiving complete documentation." },
  { q: "Which states do you serve?", a: "Thanks to the electronic process, we operate throughout the national territory with the same effectiveness." },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-500 font-light">Direct answers to your main questions.</p>
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