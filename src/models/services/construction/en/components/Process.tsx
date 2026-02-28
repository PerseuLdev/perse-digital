'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Consulting & Feasibility',
    description: 'We analyze the land, scope, and budget to understand your real needs and document all technical requirements before the project begins.',
  },
  {
    number: '02',
    title: 'Executive Design & Permits',
    description: 'Our architecture and engineering team develops detailed BIM projects and handles all the bureaucracy, permits, and city hall licenses.',
  },
  {
    number: '03',
    title: 'Guaranteed-Cost Construction',
    description: 'The construction starts with a locked financial schedule. You get weekly reports without worrying about managing workers or purchasing materials.',
  },
  {
    number: '04',
    title: 'Handing Over the Keys',
    description: 'We perform a final quality audit and deliver the property spotless, ready to use, complete with the owners manual and structural warranties.',
  },
];

export function Process() {
  return (
    <div className="py-24 sm:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 lg:items-center">
          
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              A process focused on peace of mind.
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              Vértice.Eng created a step-by-step methodology where you focus on design choices
              while we handle all the technical and bureaucratic complexity.
            </p>
            
            <button className="h-12 px-6 rounded-full bg-white/5 text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-all active:scale-[0.98]">
              Schedule Initial Meeting
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
