'use client';

import React, { useRef } from 'react';
import { Linkedin, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  {
    id: 1,
    name: 'Dra. Ana Clara',
    role: 'Implantodontista',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Dr. Lucas Silva',
    role: 'Ortodontista',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Dra. Júlia Mendes',
    role: 'Harmonização Facial',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Dr. Rafael Costa',
    role: 'Estética Dental',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Dra. Beatriz Souza',
    role: 'Endodontista',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
  }
];

const Team: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Width of card + gap approx
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="team" className="py-24 px-6 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        {/* Subtle Background Blob */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-teal-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Corpo Clínico</h2>
            <p className="text-slate-600 max-w-2xl text-lg">
              Nossa equipe é formada por mestres e doutores apaixonados por transformar sorrisos com arte e ciência.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-slate-300/50 bg-white/40 backdrop-blur-md text-slate-600 hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all active:scale-95 shadow-sm"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-slate-800 text-white hover:bg-teal-600 transition-all active:scale-95 shadow-lg border border-white/10"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {team.map((member) => (
              <div 
                key={member.id} 
                className="min-w-[300px] md:min-w-[340px] h-[500px] snap-center group relative rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Full Height Image */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-50 transition-opacity duration-500" />

                {/* Glass Info Panel (Superimposed) */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-[2rem] shadow-lg flex flex-col items-center text-center group-hover:bg-white/20 transition-colors duration-300">
                    
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">{member.name}</h3>
                    <p className="text-teal-200 font-medium text-sm tracking-wide uppercase mb-4">{member.role}</p>
                    
                    {/* Social Buttons Container */}
                    <div className="flex gap-3">
                      {/* LinkedIn */}
                      <a 
                        href="#" 
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-blue-600 text-white backdrop-blur-md border border-white/30 transition-all duration-300 shadow-lg transform hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      
                      {/* Instagram */}
                      <a 
                        href="#" 
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-pink-600 text-white backdrop-blur-md border border-white/30 transition-all duration-300 shadow-lg transform hover:scale-110"
                        aria-label="Instagram"
                      >
                        <Instagram size={18} />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            ))}
            
            {/* Spacer for right padding in carousel */}
            <div className="min-w-[20px] md:hidden"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;