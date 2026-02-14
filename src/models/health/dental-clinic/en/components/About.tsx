'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" 
              alt="Clínica Odontológica Moderna" 
              className="rounded-3xl shadow-lg w-full h-64 object-cover mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop" 
              alt="Dentista atendendo paciente" 
              className="rounded-3xl shadow-lg w-full h-64 object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block text-teal-600 font-semibold tracking-wider uppercase text-sm">
              Sobre a Odonto Perse
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Tecnologia e humanização para cuidar de você.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Fundada com a missão de transformar a experiência odontológica, a Odonto Perse combina um ambiente acolhedor, tipo spa, com a mais avançada tecnologia digital.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Acreditamos que cada sorriso é único. Por isso, desenvolvemos protocolos personalizados que garantem não apenas a estética, mas a saúde e a função mastigatória a longo prazo.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                "State-of-the-art equipment (Digital X-Ray, 3D Scanner)",
                "Climate-controlled environment and hospital-grade sterilization",
                "Multidisciplinary specialist team",
                "Punctual and respectful service"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-teal-500 flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;