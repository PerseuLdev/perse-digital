'use client';

import React from 'react';
import { Instagram, Phone } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-stone-50 py-12 border-t border-stone-200">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
      <span className="font-serif text-2xl tracking-widest font-bold text-stone-800">
        LUMINA<span className="text-[#C89B6B]">.</span>
      </span>

      <p className="text-stone-500 text-sm text-center">
        © {new Date().getFullYear()} Lumina Aesthetics. All rights reserved.
      </p>

      <div className="flex gap-4 text-stone-400">
        <a
          href="https://instagram.com/luminaestetica"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#C89B6B] transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
        <a
          href="tel:+5511999999999"
          className="hover:text-[#C89B6B] transition-colors"
          aria-label="Phone"
        >
          <Phone size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
