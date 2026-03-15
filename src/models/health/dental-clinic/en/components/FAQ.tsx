'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do you accept dental insurance?",
    answer: "We work predominantly with private care to ensure maximum quality and dedicated time for each patient. However, we offer full support for reimbursement with your insurance, issuing all necessary documentation."
  },
  {
    question: "Is implant treatment painful?",
    answer: "No. We use minimally invasive techniques and computerized digital anesthesia. Post-operative recovery is usually very smooth, and we prescribe all necessary medication for your comfort."
  },
  {
    question: "How long does teeth whitening last?",
    answer: "Durability varies according to the patient's eating habits and hygiene, but generally results remain stable for 1 to 3 years. We recommend periodic maintenance."
  },
  {
    question: "Is it possible to pay in installments?",
    answer: "Yes! We offer easy payment options, including credit card installments and bank transfer, so you can achieve your perfect smile without straining your budget."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Clarify the main points about our services.</p>
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
