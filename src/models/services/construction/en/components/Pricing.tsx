'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from '@phosphor-icons/react';

const plans = [
  {
    name: 'Design + Management',
    description: 'Ideal for those who already have trusted labor but need architectural and executive guidance.',
    price: 'Starting at $150/sqm',
    features: [
      '3D Architectural Design',
      'Complementary Designs (Structural, Electrical, Plumbing)',
      'Detailed budget spreadsheet',
      'Weekly engineering visits',
      'BIM Compatibility'
    ],
    highlight: false,
    cta: 'Schedule Consultation',
  },
  {
    name: 'Turnkey Construction',
    description: '360º Solution. We handle purchases, hiring, and all responsibilities until the keys are delivered.',
    price: 'Custom Estimate',
    features: [
      'Everything in Design + Management',
      'Purchase of all materials (rough and finish)',
      'Qualified in-house labor',
      'Full-time daily management',
      '5-year structural warranty',
      'Post-construction cleaning'
    ],
    highlight: true,
    cta: 'Request Estimate',
  },
  {
    name: 'Execution Only',
    description: 'For clients who already have all approved designs and just need experienced builders.',
    price: 'Starting at $850/sqm',
    features: [
      'Rigorous project execution',
      'Supply of labor and machinery',
      'Construction site management',
      'Monitoring by responsible engineer',
      'Permits and technical documentation'
    ],
    highlight: false,
    cta: 'Send My Project',
  }
];

export function Pricing() {
  return (
    <div className="py-24 sm:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Contract Types
          </h2>
          <p className="text-lg text-zinc-400">
            Trust and transparency from the first handshake. 
            Choose the partnership model that best fits your reality and moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-8 rounded-[2rem] flex flex-col h-full bg-zinc-900/40 border ${
                plan.highlight 
                  ? 'border-[#ffde59]/50 shadow-[0_0_40px_-15px_rgba(255,222,89,0.15)]' 
                  : 'border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#ffde59] text-zinc-950 text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-zinc-400 h-16">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-3xl font-bold text-white tracking-tight">{plan.price}</span>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} weight="bold" className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-[#ffde59]' : 'text-zinc-500'}`} />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <button 
                  className={`w-full h-12 rounded-xl font-semibold transition-all active:scale-[0.98] ${
                    plan.highlight
                      ? 'bg-[#ffde59] text-zinc-950 hover:bg-[#ffde59]/90'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
