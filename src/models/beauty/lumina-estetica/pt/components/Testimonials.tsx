'use client';

import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Mariana Costa',
    role: 'Empresária',
    content:
      'A melhor clínica que já frequentei. O atendimento é impecável e os resultados superaram minhas expectativas. Super recomendo!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
  },
  {
    name: 'Fernanda Lima',
    role: 'Advogada',
    content:
      'Fiz harmonização e amei a naturalidade. A equipe tem uma mão super leve e um olhar artístico incrível. Ambiente acolhedor.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
  },
  {
    name: 'Carla Souza',
    role: 'Arquiteta',
    content:
      'Profissionalismo e tecnologia de ponta. Me sinto segura e cuidada a cada visita. Minha pele nunca esteve tão bonita.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C89B6B] mb-2">
            Depoimentos
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-stone-800">
            O Que Dizem Nossas Clientes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#C89B6B] p-0.5">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex gap-1 text-[#C89B6B] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-stone-600 italic mb-6">"{review.content}"</p>
              <div>
                <h4 className="font-bold text-stone-800">{review.name}</h4>
                <span className="text-xs text-stone-400 uppercase tracking-wide">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
