'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Specialized professionals with years of expertise',
  'State-of-the-art certified equipment',
  'Controlled environment with hospital-grade sterilization',
  'Personalized and humanized care',
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop"
              alt="Aesthetic procedure"
              className="rounded-3xl shadow-lg w-full h-64 object-cover mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop"
              alt="Aesthetic clinic"
              className="rounded-3xl shadow-lg w-full h-64 object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-block text-[#C89B6B] font-semibold tracking-wider uppercase text-sm">
              About Lumina Aesthetics
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              Art, science and care in every procedure.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Founded with the mission of elevating each client's confidence, Lumina combines
              a welcoming and sophisticated environment with the most advanced aesthetic protocols.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              We believe beauty is individual. That's why we develop fully personalized treatments
              that enhance your natural features with safety and precision.
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
