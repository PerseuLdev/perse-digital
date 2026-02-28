'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';

const faqs = [
  {
    question: 'Does the company assume the risk of extra costs during construction?',
    answer: 'Yes, in our "Turnkey" model, we sign a closed-risk contract. If there is a variation in the price of steel or cement, Vértice.Eng absorbs the difference. The contract value is exactly what you will pay.'
  },
  {
    question: 'How does the construction warranty work?',
    answer: 'We offer a 5-year full structural warranty. For finishes (painting, flooring), the warranty follows ABNT standards. Everything is delivered documented in the Owner\'s Manual at the end of the project.'
  },
  {
    question: 'What if I already have the architectural design ready?',
    answer: 'Excellent! We handle the budgeting stage and structural compatibility. We work in total synergy with your chosen architect, ensuring the designed design is not altered by engineering.'
  },
  {
    question: 'Do you carry out projects outside the state of São Paulo?',
    answer: 'Currently our service area is within a 200km radius of the capital of São Paulo for residential projects, and throughout the South and Southeast for the development and execution of warehouses and commercial infrastructure.'
  },
  {
    question: 'How can I monitor my project if I travel?',
    answer: 'You do not need to be on-site. We use our own management software where you receive weekly reports with photos, drone videos, and financial and physical progress charts, all accessible on your phone.'
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-24 sm:py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-zinc-400">
            Total transparency is the foundation of everything we build.
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
