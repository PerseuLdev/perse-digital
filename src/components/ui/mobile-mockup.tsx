'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MobileMockupProps {
  url?: string;
  image?: string;
  className?: string;
  title?: string;
  children?: React.ReactNode;
}

export function MobileMockup({ url, image, className, title, children }: MobileMockupProps) {
  return (
    <div className={cn("relative bg-[#1a1a1a] rounded-[2.5rem] p-2 shadow-2xl border border-white/10", className)}>
      {/* Screen bezel */}
      <div className="relative rounded-[2rem] overflow-hidden bg-white aspect-[9/19.5]">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-20" />

        {/* Screen content */}
        <div className="w-full h-full pt-8 overflow-hidden">
          {url ? (
            <iframe 
              src={url} 
              className="w-full h-full border-none" 
              title={title || "Mobile Preview"}
            />
          ) : image ? (
            <img 
              src={image} 
              alt={title || "Mobile Preview"} 
              className="w-full h-auto object-top transition-transform duration-[8000ms] group-hover:translate-y-[calc(-100%+300px)]"
            />
          ) : children}
        </div>
        
        {/* Reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Buttons */}
      <div className="absolute -right-0.5 top-20 w-1 h-8 bg-[#2a2a2a] rounded-l" />
      <div className="absolute -right-0.5 top-32 w-1 h-12 bg-[#2a2a2a] rounded-l" />
      <div className="absolute -left-0.5 top-24 w-1 h-6 bg-[#2a2a2a] rounded-r" />
    </div>
  );
}
