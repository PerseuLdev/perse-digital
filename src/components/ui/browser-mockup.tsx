'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BrowserMockupProps {
  url?: string;
  image?: string;
  className?: string;
  title?: string;
  children?: React.ReactNode;
  onError?: () => void;
  onLoad?: () => void;
}

export function BrowserMockup({ url, image, className, title, children, onError, onLoad }: BrowserMockupProps) {
  return (
    <div className={cn("relative rounded-xl overflow-hidden shadow-2xl border border-white/10 dark:border-white/5 bg-slate-900", className)}>
      {/* Browser header */}
      <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-3 border-b border-white/5">
        <div className="flex items-center gap-1.5 text-slate-500">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-[#2a2a2a] rounded-md px-3 py-1 flex items-center gap-2">
            <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-[10px] text-white/40 font-mono truncate">{url || 'persedigital.com.br'}</span>
          </div>
        </div>
      </div>

      {/* Browser content */}
      <div className={cn("relative bg-white overflow-hidden", url ? "aspect-video" : "h-full")}>
        {url ? (
          <iframe 
            src={url} 
            className="w-full h-full border-none" 
            title={title || "Browser Preview"}
          />
        ) : image ? (
          <div className="w-full h-full overflow-hidden">
             <img
              src={image}
              alt={title || "Browser Preview"}
              className="w-full h-auto object-top transition-transform duration-[8000ms] group-hover:translate-y-[calc(-100%+200px)]"
              onError={onError}
              onLoad={onLoad}
            />
          </div>
        ) : children}
      </div>
    </div>
  );
}
