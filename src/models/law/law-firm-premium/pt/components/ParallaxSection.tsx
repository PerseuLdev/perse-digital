import React from 'react';

export const ParallaxSection: React.FC = () => {
  return (
    <section 
      className="relative py-32 parallax-bg bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")'
      }}
    >
      <div className="absolute inset-0 bg-gold-900/90 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="block text-6xl text-gold-500 font-serif mb-6">"</span>
        <h2 className="font-serif text-3xl md:text-5xl text-white font-light italic leading-tight mb-8">
          A injustiça em qualquer lugar é uma ameaça à justiça em todo lugar.
        </h2>
        <p className="text-gold-500 text-lg font-bold uppercase tracking-widest">
          — Martin Luther King Jr.
        </p>
      </div>
    </section>
  );
};