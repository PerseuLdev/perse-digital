'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from '@phosphor-icons/react';

const features = [
  {
    title: 'In-House Structural Engineering',
    description: 'We do not rely on third parties to guarantee the stability of your project. Our internal team signs and executes foundations, slabs, and structural masonry.',
    bullets: ['100% inspected foundations', 'Use of top-tier steel', 'Technical reports at every stage'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
    align: 'left' as const,
  },
  {
    title: 'Millimetric Finishes',
    description: 'The difference between a regular build and a premium build is in the details. Our tiling and carpentry team works with millimetric precision.',
    bullets: ['Large format porcelain tiles', 'Custom marble work', 'Airless painting and flawless spackling'],
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop',
    align: 'right' as const,
  },
  {
    title: 'In-Home Technology',
    description: 'We deliver residences already prepared for the future, with complete infrastructure for automation, solar energy, and thermal comfort.',
    bullets: ['Structured cabling', 'Built-in AC infrastructure', 'Preparation for photovoltaic panels'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop',
    align: 'left' as const,
  }
];

export function Features() {
  return (
    <div className="py-24 sm:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Uncompromising construction standards.
          </h2>
          <p className="text-lg text-zinc-400">
            We do not cut costs where you cannot see. Structural excellence and 
            aesthetic rigor walk together in every square meter built.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                feature.align === 'right' ? 'lg:rtl' : ''
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, x: feature.align === 'left' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={feature.align === 'right' ? 'lg:ltr' : ''}
              >
                <div className="w-12 h-12 rounded-xl bg-[#ffde59]/10 border border-[#ffde59]/20 flex items-center justify-center mb-6 text-[#ffde59] font-bold font-mono">
                  0{index + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-4">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <Check size={12} weight="bold" className="text-emerald-500" />
                      </div>
                      <span className="text-zinc-300 font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 ${feature.align === 'right' ? 'lg:ltr' : ''}`}
              >
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
                {/* Liquid Glass inner border */}
                <div className="absolute inset-0 border border-white/10 rounded-[2rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] pointer-events-none" />
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
