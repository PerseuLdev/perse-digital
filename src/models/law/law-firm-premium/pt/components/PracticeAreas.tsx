'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Users, Building, Shield, Briefcase, Wifi, ArrowUpRight } from 'lucide-react';

const areas = [
  // Linha 1: 1 pequeno + 1 grande
  {
    title: 'Direito Civil',
    description: 'Resolução de conflitos e contratos.',
    icon: Scale,
    colSpan: "md:col-span-1"
  },
  {
    title: 'Direito Trabalhista',
    description: 'Defesa de direitos laborais e acordos.',
    icon: Briefcase,
    colSpan: "md:col-span-2"
  },
  // Linha 2: 3 pequenos
  {
    title: 'Direito de Família',
    description: 'Divórcios, guarda e inventários.',
    icon: Users,
    colSpan: "md:col-span-1"
  },
  {
    title: 'Direito Criminal',
    description: 'Defesa estratégica em processos.',
    icon: Shield,
    colSpan: "md:col-span-1"
  },
  {
    title: 'Direito Empresarial',
    description: 'Consultoria preventiva para empresas.',
    icon: Building,
    colSpan: "md:col-span-1"
  },
  // Linha 3: 1 grande + 1 pequeno
  {
    title: 'Direito Digital',
    description: 'Crimes virtuais e LGPD.',
    icon: Wifi,
    colSpan: "md:col-span-2"
  },
  {
    title: 'Direito Imobiliário',
    description: 'Compra, venda e regularização.',
    icon: Building,
    colSpan: "md:col-span-1"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const PracticeAreas: React.FC = () => {
  return (
    <section className="py-16 md:py-32 bg-[#050505]" id="areas">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Áreas de Atuação</h2>
          </div>
          <p className="max-w-md text-neutral-400 font-light text-right md:text-left">
            Soluções jurídicas adaptadas para cada necessidade, com foco na eficiência e no resultado.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`${area.colSpan} group relative bg-neutral-900/40 p-8 overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full justify-between min-h-[160px] md:min-h-[180px]">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/5 rounded-full text-white group-hover:text-gold-500 group-hover:bg-gold-500/10 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="text-neutral-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {area.title}
                    </h3>
                    <p className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300">
                      {area.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href="#contato" className="inline-flex items-center gap-2 text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors uppercase tracking-widest text-xs font-bold">
            Verificar disponibilidade <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
