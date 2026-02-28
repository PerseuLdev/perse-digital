'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from '@phosphor-icons/react';

const features = [
  {
    title: 'Engenharia Estrutural Própria',
    description: 'Não dependemos de terceiros para garantir a estabilidade do seu projeto. Nossa equipe interna assina e executa fundições, lajes e alvenaria estrutural.',
    bullets: ['Fundações 100% periciadas', 'Uso de aço de primeira linha', 'Laudo técnico em cada etapa'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
    align: 'left' as const,
  },
  {
    title: 'Acabamentos Milimétricos',
    description: 'A diferença entre uma obra regular e uma obra premium está nos detalhes. Nossa equipe de assentamento e marcenaria trabalha com precisão de milímetros.',
    bullets: ['Porcelanatos de grande formato', 'Marmoraria sob medida', 'Pintura airless e massa corrida impecável'],
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop',
    align: 'right' as const,
  },
  {
    title: 'Tecnologia In-Home',
    description: 'Entregamos residências já preparadas para o futuro, com infraestrutura completa para automação, energia solar e conforto térmico.',
    bullets: ['Cabeamento estruturado', 'Infra de ar-condicionado embutida', 'Preparação para painéis fotovoltaicos'],
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
            Padrão construtivo sem concessões.
          </h2>
          <p className="text-lg text-zinc-400">
            Nós não cortamos custos onde você não pode ver. A excelência estrutural e 
            o rigor estético caminham juntos em cada metro quadrado construído.
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
