'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

interface HeroProps {
  onOpenSchedule: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
          alt="Clínica de estética"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-stone-50/10" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold tracking-[0.2em] uppercase mb-6 border border-white/30">
          Beleza & Estética Avançada
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Revele Sua <br />
          <span className="text-[#C89B6B] italic font-serif">Melhor Versão</span>
        </h1>

        <p className="text-lg md:text-xl text-stone-100 mb-10 max-w-2xl mx-auto font-light">
          Tratamentos personalizados focados em naturalidade e rejuvenescimento.
          Cuidamos de você com tecnologia de ponta e olhar artístico.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" onClick={onOpenSchedule} className="!px-8 !py-4">
            Agendar Consulta
          </Button>
          <a
            href="#services"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            Ver Tratamentos <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
