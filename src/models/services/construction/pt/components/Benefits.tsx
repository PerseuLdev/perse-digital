'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Money, Blueprint, Users, Leaf } from '@phosphor-icons/react';

const benefits = [
  {
    icon: <Money size={32} weight="duotone" className="text-[#ffde59]" />,
    title: 'Orçamento Blindado',
    description: 'Sem surpresas desagradáveis. O valor acordado no início é o valor que você pagará até o final da obra.',
  },
  {
    icon: <Clock size={32} weight="duotone" className="text-[#ffde59]" />,
    title: 'Cronograma Preciso',
    description: 'Gestão rigorosa de tempo. Mapeamos cada etapa para garantir que a entrega das chaves não atrase um dia.',
  },
  {
    icon: <ShieldCheck size={32} weight="duotone" className="text-[#ffde59]" />,
    title: 'Garantia Estrutural',
    description: 'Construções feitas para durar gerações. Materiais premium e processos de engenharia certificados.',
  },
  {
    icon: <Blueprint size={32} weight="duotone" className="text-[#ffde59]" />,
    title: 'Projetos Inteligentes',
    description: 'Design pensado não apenas para beleza, mas para funcionalidade máxima e conforto térmico.',
  },
  {
    icon: <Users size={32} weight="duotone" className="text-[#ffde59]" />,
    title: 'Equipe Especializada',
    description: 'Profissionais altamente qualificados, próprios da construtora. Não terceirizamos nosso padrão de qualidade.',
  },
  {
    icon: <Leaf size={32} weight="duotone" className="text-[#ffde59]" />,
    title: 'Obras Sustentáveis',
    description: 'Redução drástica de desperdício de material e implementação de tecnologias de energia limpa (opcional).',
  },
];

export function Benefits() {
  return (
    <div className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Luz difusa de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Construir não precisa ser uma dor de cabeça.
          </h2>
          <p className="text-lg text-zinc-400">
            Enquanto outras construtoras deixam problemas para o cliente resolver, 
            nós assumimos 100% da responsabilidade pela obra. Do projeto à entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffde59]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-6 w-14 h-14 rounded-2xl bg-[#ffde59]/10 border border-[#ffde59]/20 flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
