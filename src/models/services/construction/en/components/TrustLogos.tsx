'use client';

import React from 'react';

export function TrustLogos() {
  // Substituir por logos reais ou placeholders criativos
  const logos = [
    { id: 1, name: 'Arc Steel' },
    { id: 2, name: 'Vanguard' },
    { id: 3, name: 'Nova Build' },
    { id: 4, name: 'Nexus.Co' },
    { id: 5, name: 'Oceana' },
  ];

  return (
    <div className="py-12 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">
          Premium engineering trusted by
        </p>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center">
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-white font-serif">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
