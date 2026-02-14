'use client';

import React, { useState, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((e.clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((e.touches[0].clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm">Resultados Reais</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Veja a diferença que um <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">novo sorriso</span> pode fazer.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Utilizamos tecnologias de clareamento a laser e facetas de porcelana para transformar sorrisos de forma natural e duradoura. Arraste a barra para ver a transformação.
            </p>
            
            <div className="flex gap-8 pt-4">
              <div>
                <h4 className="text-3xl font-bold text-white">1.500+</h4>
                <p className="text-slate-400 text-sm">Sorrisos Renovados</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">100%</h4>
                <p className="text-slate-400 text-sm">Satisfação Garantida</p>
              </div>
            </div>
          </div>

          {/* Interactive Slider */}
          <div className="order-1 lg:order-2">
            <div 
              ref={containerRef}
              className="relative w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden cursor-col-resize shadow-2xl border-4 border-white/10"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Base Layer - Full Width) */}
              <img
                src="/models/health/dental-clinic/pt/sorriso-depois.png"
                alt="Depois do tratamento"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute top-0 right-0 h-full overflow-hidden"
                style={{ width: `${100 - sliderPosition}%` }}
              >
                <div className="absolute top-4 right-4 bg-teal-500/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold z-10">
                  DEPOIS
                </div>
              </div>

              {/* Before Image (Overlay Layer - Clipped) */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="/models/health/dental-clinic/pt/sorriso-antes.png"
                  alt="Antes do tratamento"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    // Removido o filtro CSS para usar a imagem real
                    width: containerRef.current ? containerRef.current.offsetWidth : '100%'
                  }}
                />
                <div className="absolute top-4 left-4 bg-slate-800/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold z-10">
                  ANTES
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-teal-600">
                  <ArrowLeftRight size={20} />
                </div>
              </div>

            </div>
            <p className="text-center text-slate-400 text-xs mt-4 flex items-center justify-center gap-2">
              <ArrowLeftRight size={14} /> Arraste para comparar
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;