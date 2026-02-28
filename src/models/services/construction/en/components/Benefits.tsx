'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Money, Blueprint, Users, Leaf } from '@phosphor-icons/react';

const benefits = [
  {
    icon: <Money size={32} weight="duotone" className="text-[#ffde59]" />,
    title: 'Locked-in Budget',
    description: 'No unpleasant surprises. The agreed value at the start is exactly what you will pay until the project ends.',
  },
  {
    icon: <Clock size={32} weight="duotone" className="text-[#ffde59]" />,
    title: 'Precise Schedule',
    description: 'Rigorous time management. We map out every stage to guarantee the keys are delivered exactly on time.',
  },
  {
    icon: <ShieldCheck size={32} weight="duotone" className="text-[#ffde59]" />,
    title: 'Structural Warranty',
    description: 'Buildings made to last generations. Premium materials and certified engineering processes.',
  },
  {
    icon: <Blueprint size={32} weight="duotone" className="text-[#ffde59]" />,
    title: 'Smart Designs',
    description: 'Designed not just for beauty, but for maximum functionality and thermal comfort.',
  },
  {
    icon: <Users size={32} weight="duotone" className="text-[#ffde59]" />,
    title: 'Specialized Team',
    description: 'Highly qualified professionals from our own workforce. We never outsource our quality standards.',
  },
  {
    icon: <Leaf size={32} weight="duotone" className="text-[#ffde59]" />,
    title: 'Sustainable Sites',
    description: 'Drastic reduction of material waste and implementation of clean energy technologies (optional).',
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
            Building doesn't have to be a headache.
          </h2>
          <p className="text-lg text-zinc-400">
            While other construction companies leave problems for the client to solve, 
            we take 100% responsibility for the site. From blueprint to delivery.
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
