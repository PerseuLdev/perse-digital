'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Facial Harmonization',
    description:
      'Balance and symmetry to enhance your natural features through strategic fillers and botulinum toxin.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Collagen Biostimulators',
    description:
      "Restore firmness and skin quality by stimulating your body's natural collagen production.",
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Skin Protocols',
    description:
      'Deep cleansing, peeling and intense hydration for radiant, even and healthy-looking skin.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Laser Technology',
    description:
      'Advanced treatments for spots, scars and full facial and neck rejuvenation.',
    image: 'https://images.unsplash.com/photo-1600334019640-eb2a6a6a245d?q=80&w=800&auto=format&fit=crop',
  },
];

const ServiceCard: React.FC<{ title: string; description: string; image: string }> = ({
  title,
  description,
  image,
}) => (
  <div className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full">
    <div className="h-48 overflow-hidden relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-semibold text-stone-800 mb-3 group-hover:text-[#C89B6B] transition-colors">
        {title}
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>
      <span className="text-[#C89B6B] text-sm font-semibold flex items-center gap-1 mt-auto opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        Learn more <ArrowRight size={14} />
      </span>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C89B6B] mb-2">
            Specialties
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-stone-800">Our Services</h3>
          <div className="w-20 h-1 bg-[#C89B6B] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
