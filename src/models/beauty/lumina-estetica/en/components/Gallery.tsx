'use client';

import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&h=800&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&h=800&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&h=800&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&h=800&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&h=800&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1620331313123-6e378e3c23df?q=80&h=800&w=800&auto=format&fit=crop',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="w-full flex flex-col items-center justify-start py-24 bg-white">
      <div className="max-w-3xl text-center px-4 mb-8">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#C89B6B] mb-2">Portfolio</h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-stone-800">Our Latest Work</h3>
        <p className="text-sm text-stone-500 mt-4 max-w-xl mx-auto">
          A visual collection of our most recent work. Each procedure carried out with
          intention, safety and style.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-2 h-auto md:h-[400px] w-full max-w-6xl mt-6 px-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group flex-grow transition-all w-full md:w-24 lg:w-32 rounded-lg overflow-hidden h-[300px] md:h-[400px] duration-500 hover:w-full md:hover:w-[400px]"
          >
            <img
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src={src}
              alt={`Aesthetic result ${idx + 1}`}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
