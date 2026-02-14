'use client';

import React, { useEffect, useState } from 'react';
import Button from './Button';
import { CalendarCheck, MessageCircle, ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import FadeIn from './FadeIn';

interface HeroProps {
  onOpenSchedule: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('services');
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden bg-slate-900">
      
      {/* Edge-to-Edge Parallax Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ 
            transform: `translateY(${scrollY * 0.4}px)`,
            backgroundImage: 'url("https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1920&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
           {/* Overlays for readability and aesthetic */}
           <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
           <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        
        <FadeIn className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 text-sm font-semibold tracking-wide shadow-sm">
            <Award size={16} />
            <span>Excellence in Aesthetic Dentistry</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg">
            Your smile is our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">masterpiece</span>.
          </h1>

          <p className="text-lg lg:text-xl text-slate-200 leading-relaxed font-medium drop-shadow-md max-w-xl">
            Experience a new standard in dental care. Cutting-edge technology, absolute comfort, and life-transforming results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div onClick={onOpenSchedule} className="flex-1 sm:flex-none">
              <Button variant="primary" className="h-14 px-8 text-lg w-full sm:w-auto shadow-teal-500/30">
                <CalendarCheck size={20} />
                Book Appointment
              </Button>
            </div>
            <a href="#services" onClick={scrollToServices} className="flex-1 sm:flex-none">
              <Button variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto !text-white !border-white/30 hover:!bg-white/10 hover:!border-white">
                Explore Treatments
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-slate-300 text-sm font-bold">
              <div className="bg-teal-500/20 p-2 rounded-full text-teal-400 border border-teal-500/30">
                <ShieldCheck size={18} />
              </div>
              3D Technology
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-sm font-bold">
              <div className="bg-teal-500/20 p-2 rounded-full text-teal-400 border border-teal-500/30">
                 <ThumbsUp size={18} />
              </div>
              +5000 Smiles
            </div>
          </div>
        </FadeIn>

        {/* Floating Card Right */}
        <div className="hidden lg:flex justify-end items-center h-full">
          <FadeIn delay={300}>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl max-w-xs animate-bounce-slow transform translate-y-12">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                        <MessageCircle size={24} />
                    </div>
                    <div>
                        <p className="font-bold text-white">Atendimento Online</p>
                        <p className="text-xs text-teal-100">Resposta imediata</p>
                    </div>
                </div>
                <p className="text-sm text-slate-100 font-medium leading-relaxed">
                    "Estamos prontos para transformar seu sorriso. Fale com a gente agora!"
                </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default Hero;