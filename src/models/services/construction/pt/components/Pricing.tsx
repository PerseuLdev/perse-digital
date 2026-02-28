'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from '@phosphor-icons/react';

const plans = [
  {
    name: 'Projeto + Gestão',
    description: 'Ideal para quem já possui mão de obra de confiança, mas precisa de direcionamento executivo e arquitetônico.',
    price: 'A partir de R$ 150/m²',
    features: [
      'Projeto Arquitetônico 3D',
      'Projetos Complementares (Estrutural, Elétrica, Hidráulica)',
      'Planilha orçamentária detalhada',
      'Visitas semanais do engenheiro',
      'Compatibilização BIM'
    ],
    highlight: false,
    cta: 'Agendar Consulta',
  },
  {
    name: 'Obra Completa (Turnkey)',
    description: 'Solução 360º. Nós assumimos compras, contratações e todas as responsabilidades até a entrega da chave.',
    price: 'Orçamento Sob Medida',
    features: [
      'Tudo do plano Projeto + Gestão',
      'Compra de todos os materiais (bruto e acabamento)',
      'Mão de obra própria qualificada',
      'Gerenciamento diário full-time',
      'Garantia estrutural de 5 anos',
      'Limpeza pós-obra'
    ],
    highlight: true,
    cta: 'Solicitar Orçamento',
  },
  {
    name: 'Somente Execução',
    description: 'Para clientes que já possuem todos os projetos aprovados e precisam apenas de construtores experientes.',
    price: 'A partir de R$ 850/m²',
    features: [
      'Execução rigorosa dos projetos',
      'Fornecimento de mão de obra e maquinário',
      'Gestão de canteiro de obras',
      'Acompanhamento de engenheiro responsável',
      'Emissão de ART/RRT'
    ],
    highlight: false,
    cta: 'Enviar Meu Projeto',
  }
];

export function Pricing() {
  return (
    <div className="py-24 sm:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Tipos de Contratação
          </h2>
          <p className="text-lg text-zinc-400">
            Truste e transparência desde o primeiro aperto de mãos. 
            Escolha o modelo de parceria que melhor atende sua realidade e momento.
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
                    Mais Escolhido
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
