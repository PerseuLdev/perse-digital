import React from 'react';
import { FadeIn } from './FadeIn';

export const Trust: React.FC = () => {
  return (
    <section className="py-16 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
            <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] mb-10">Trusted by our clients</p>
        </FadeIn>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos Placeholders - Font Awesome styling for demo */}
            {['TechCorp', 'InovaGroup', 'AlphaHoldings', 'FutureLaw', 'BuildIt'].map((logo, i) => (
                <FadeIn key={i} delay={i * 0.1} className="group">
                   <span className="text-2xl font-serif font-bold text-white group-hover:text-gold-500 transition-colors">{logo}</span>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};