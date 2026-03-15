'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Profissionais especializados com anos de experiência',
  'Equipamentos de última geração certificados pela ANVISA',
  'Ambiente climatizado com esterilização hospitalar',
  'Atendimento personalizado e humanizado',
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop"
              alt="Procedimento estético"
              className="rounded-3xl shadow-lg w-full h-64 object-cover mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop"
              alt="Clínica de estética"
              className="rounded-3xl shadow-lg w-full h-64 object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block text-[#C89B6B] font-semibold tracking-wider uppercase text-sm">
              Sobre a Lumina Estética
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              Arte, ciência e cuidado em cada procedimento.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Fundada com a missão de elevar a autoestima de cada cliente, a Lumina combina
              um ambiente acolhedor e sofisticado com os mais avançados protocolos estéticos do mercado.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Acreditamos que a beleza é individual. Por isso, desenvolvemos tratamentos
              totalmente personalizados que realçam seus traços naturais com segurança e precisão.
            </p>

            <ul className="space-y-4 pt-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-stone-700 font-medium">
                  <CheckCircle2 className="text-[#C89B6B] flex-shrink-0" size={20} />
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
