'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Consultoria e Viabilidade',
    description: 'Analisamos o terreno, escopo e orçamento para entender as reais necessidades e documentar todas as exigências técnicas antes do projeto começar.',
  },
  {
    number: '02',
    title: 'Projeto Executivo e Aprovações',
    description: 'Nossa equipe de arquitetura e engenharia desenvolve os projetos detalhados em BIM e cuida de toda burocracia, alvarás e licenças na prefeitura.',
  },
  {
    number: '03',
    title: 'Construção Custo-Garantido',
    description: 'A obra começa com cronograma físico-financeiro travado. Você acompanha relatórios semanais sem se preocupar com a gestão de pedreiros ou compras.',
  },
  {
    number: '04',
    title: 'Entrega das Chaves',
    description: 'Realizamos auditoria final de qualidade e entregamos o imóvel limpo, pronto para uso, com manual do proprietário e garantias estruturais.',
  },
];

export function Process() {
  return (
    <div className="py-24 sm:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 lg:items-center">
          
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              Um processo focado em paz mental.
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              A Vértice.Eng criou uma metodologia de trabalho step-by-step onde você foca nas escolhas de design, 
              enquanto nós lidamos com toda a complexidade técnica e burocrática.
            </p>
            
            <button className="h-12 px-6 rounded-full bg-white/5 text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-all active:scale-[0.98]">
              Agendar Reunião Inicial
            </button>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Linha vertical */}
            <div className="absolute left-[29px] top-4 bottom-4 w-px bg-white/10 md:hidden" />
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-6"
                >
                  <div className="relative w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg shadow-black flex-shrink-0 z-10">
                    <span className="text-xl font-bold font-mono text-[#ffde59]">
                      {step.number}
                    </span>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-[45ch]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
