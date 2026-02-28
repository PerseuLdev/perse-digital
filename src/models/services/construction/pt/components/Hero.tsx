'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';

export function Hero() {
  return (
    <div className="relative min-h-[100dvh] pt-28 pb-16 md:pt-32 md:pb-24 flex items-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[#050505] -z-20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ffde59]/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ffde59] animate-pulse" />
              <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Engenharia Premium</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05] text-white mb-6">
              Construímos o seu projeto sem <span className="text-zinc-500 line-through">imprevistos</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-[50ch]">
              Garantimos prazo, orçamento e qualidade. Nossa equipe de engenharia assume o risco para você aproveitar a obra.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="h-14 px-8 rounded-full bg-[#ffde59] text-zinc-950 text-base font-semibold hover:bg-[#ffde59]/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group w-full sm:w-auto">
                Iniciar meu Projeto
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="h-14 px-8 rounded-full bg-white/5 text-white text-base font-medium border border-white/10 hover:bg-white/10 transition-all active:scale-[0.98] flex items-center justify-center w-full sm:w-auto">
                Ver Portfólio
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Cliente"
                    className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1 text-[#ffde59]">
                  {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                </div>
                <span className="text-sm tracking-tight text-zinc-400">+120 obras entregues</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-[#ffde59]/20 to-transparent rounded-[2.5rem] blur-3xl -z-10" />
             
             {/* Main Image Container using abstract glass design */}
             <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] bg-zinc-900/50 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Construção Moderna" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
                
                {/* Floating Card UI - Metric */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="absolute bottom-8 left-8 sm:-left-6 right-8 sm:right-auto p-5 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 shadow-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={24} weight="fill" className="text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-400">Status da Obra</p>
                      <p className="text-lg font-semibold text-white">100% no Prazo</p>
                      <div className="mt-2 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[85%] rounded-full" />
                      </div>
                    </div>
                  </div>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
