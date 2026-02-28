'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from '@phosphor-icons/react';

export function CTA() {
  return (
    <div className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Intense accent background glow */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[#ffde59]/5 blur-[100px] -z-10 rounded-full w-full max-w-4xl mx-auto pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-md">
            <ShieldCheck size={16} weight="fill" className="text-emerald-500" />
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Garantia de 5 anos Inclusa
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            O primeiro passo para a sua obra <span className="text-[#ffde59]">perfeita</span>.
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Agende uma reunião de viabilidade sem custos. Nossa diretoria técnica
            vai analisar suas demandas e estruturar os próximos passos do seu projeto.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="h-14 px-8 rounded-full bg-[#ffde59] text-zinc-950 text-base font-bold hover:bg-[#ffde59]/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group w-full sm:w-auto shadow-[0_0_30px_rgba(255,222,89,0.3)]">
              Falar com um Engenheiro
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <p className="mt-6 text-sm text-zinc-500 font-medium">
            Sem compromisso. Respondemos em até 2 horas úteis.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
