import React from 'react';
import { Zap, Lock, Globe, Smartphone, Clock, FileText } from 'lucide-react';
import { FadeIn } from './FadeIn';

const features = [
  { icon: <Zap />, title: "Extreme Agility", text: "Fast responses and immediate actions. Time is crucial in law." },
  { icon: <Smartphone />, title: "100% Digital", text: "Track your case via WhatsApp or email, no displacement needed." },
  { icon: <Globe />, title: "National Coverage", text: "Electronic processes allow us to act in any state." },
  { icon: <Lock />, title: "Data Security", text: "Total protection of your information with high-end encryption." },
  { icon: <FileText />, title: "Clear Language", text: "No complex terms. We explain everything in a way you understand." },
  { icon: <Clock />, title: "Availability", text: "Flexible service hours adapted to your routine." },
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
             <FadeIn>
                <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Differences</span>
                <h2 className="font-serif text-4xl md:text-5xl text-white">Why us?</h2>
             </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.1} className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-sm group">
              <div className="mb-6 inline-block p-3 rounded-full bg-gold-500/10 text-gold-500 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                {React.cloneElement(f.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{f.title}</h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">{f.text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};