'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from '@phosphor-icons/react';

const testimonials = [
  {
    text: "I had built before and it was a nightmare. With Vértice, the experience was the complete opposite. They took ownership of the problems and delivered the house 15 days ahead of schedule.",
    author: "Ricardo Mendes",
    role: "Homeowner, Alphaville Mansion",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    text: "The level of detail and finish is impressive. As an architect, I always recommend Vértice to my clients because I know my design will be executed exactly as drawn.",
    author: "Sabrina Costa",
    role: "SC Architecture",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=9"
  },
  {
    text: "The budget transparency was key. Every week I received a clear report of what was purchased and the physical progress on site. Zero headaches with the crew.",
    author: "Fernando Almeida",
    role: "Real Estate Investor",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=60"
  },
  {
    text: "We renovated our entire corporate office with the team operating during reduced business hours. The organization and cleanliness of the site were out of this world.",
    author: "Marina Linhares",
    role: "CEO, TechLumi",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=47"
  }
];

export function Testimonials() {
  return (
    <div className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[500px] bg-[#ffde59]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              The difference between promising and <span className="text-[#ffde59]">delivering</span>.
            </h2>
            <p className="text-lg text-zinc-400">
              Don't just take our word for it. See what people who chose Vértice to bring their biggest dreams to life have to say.
            </p>
          </div>
          <button className="h-12 px-6 rounded-full bg-white/5 text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-all active:scale-[0.98] whitespace-nowrap hidden md:block">
            View All Cases
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full"
            >
              <div className="flex items-center gap-1 mb-6 text-[#ffde59]">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} weight="fill" />
                ))}
              </div>
              
              <blockquote className="text-zinc-300 leading-relaxed text-sm flex-grow mb-8">
                "{t.text}"
              </blockquote>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.image} 
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">{t.author}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="mt-12 h-12 px-6 rounded-full w-full bg-white/5 text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-all active:scale-[0.98] md:hidden">
          View All Cases
        </button>

      </div>
    </div>
  );
}
