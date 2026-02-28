'use client';

import { motion } from 'framer-motion';

export function UltraFastIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="speed-grad-1" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#EA580C" />
        </linearGradient>
        <linearGradient id="speed-grad-2" x1="40" y1="10" x2="60" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FCD34D" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        <filter id="glow-fast" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Outer energy rings */}
      <motion.circle 
        cx="50" cy="50" r="42" 
        stroke="url(#speed-grad-1)" strokeWidth="2" strokeDasharray="10 15" strokeLinecap="round" opacity="0.3"
        animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ originX: '50px', originY: '50px' }}
      />
      <motion.circle 
        cx="50" cy="50" r="34" 
        stroke="url(#speed-grad-2)" strokeWidth="1.5" strokeDasharray="30 20" strokeLinecap="round" opacity="0.5"
        animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ originX: '50px', originY: '50px' }}
      />
      
      {/* Background glow */}
      <circle cx="50" cy="50" r="28" fill="url(#speed-grad-1)" opacity="0.15" filter="url(#glow-fast)" />
      
      {/* Lightning Bolt */}
      <motion.path
        d="M58 24L38 52H52L42 76L66 46H50L58 24Z"
        fill="url(#speed-grad-1)"
        stroke="url(#speed-grad-2)"
        strokeWidth="2"
        strokeLinejoin="round"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: [0.8, 1, 0.8], filter: ['drop-shadow(0 0 2px #F59E0B)', 'drop-shadow(0 0 10px #F59E0B)', 'drop-shadow(0 0 2px #F59E0B)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Dynamic particles */}
      {[...Array(3)].map((_, i) => (
        <motion.circle
          key={i}
          cx="30" cy="70" r="2" fill="#FCD34D"
          animate={{ x: [0, 40], y: [0, -40], opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}

export function SeoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="seo-grad-1" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="seo-grad-2" x1="20" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#818CF8" />
          <stop offset="1" stopColor="#C084FC" />
        </linearGradient>
        <filter id="glow-seo" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Target rings */}
      <circle cx="50" cy="50" r="40" stroke="url(#seo-grad-1)" strokeWidth="2" opacity="0.2" />
      <circle cx="50" cy="50" r="28" stroke="url(#seo-grad-1)" strokeWidth="2" opacity="0.4" strokeDasharray="4 4" />
      
      {/* Chart lines */}
      <motion.path 
        d="M25 65L40 45L55 55L75 25" 
        stroke="url(#seo-grad-2)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
      />
      
      {/* Nodes on chart */}
      <motion.circle cx="25" cy="65" r="4" fill="#C084FC" animate={{ r: [4, 6, 4] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} />
      <motion.circle cx="40" cy="45" r="4" fill="#C084FC" animate={{ r: [4, 6, 4] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
      <motion.circle cx="55" cy="55" r="4" fill="#C084FC" animate={{ r: [4, 6, 4] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }} />
      <motion.circle cx="75" cy="25" r="5" fill="#fff" filter="url(#glow-seo)" animate={{ r: [5, 8, 5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }} />
      
      {/* Floating Star */}
      <motion.path 
        d="M75 12L77.5 18L84 19L79 23.5L80.5 29.5L75 26.5L69.5 29.5L71 23.5L66 19L72.5 18L75 12Z" 
        fill="#FCD34D"
        animate={{ rotate: 360, scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ originX: '75px', originY: '20px' }}
      />
    </svg>
  );
}

export function SecureIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="sec-grad-1" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="sec-grad-2" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
        <filter id="glow-sec" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Radar rings */}
      <motion.circle cx="50" cy="50" r="45" stroke="url(#sec-grad-1)" strokeWidth="1" opacity="0.3" 
        animate={{ scale: [0.8, 1], opacity: [0, 0.3, 0] }} transition={{ duration: 3, repeat: Infinity }} />
      <circle cx="50" cy="50" r="35" stroke="url(#sec-grad-1)" strokeWidth="1" opacity="0.5" strokeDasharray="5 5" />
      
      {/* Shield Body */}
      <motion.path 
        d="M50 15L80 25V45C80 65 50 85 50 85C50 85 20 65 20 45V25L50 15Z" 
        fill="url(#sec-grad-1)" fillOpacity="0.2"
        stroke="url(#sec-grad-2)" strokeWidth="4" strokeLinejoin="round"
        animate={{ filter: ['drop-shadow(0 0 5px #10B981)', 'drop-shadow(0 0 15px #10B981)', 'drop-shadow(0 0 5px #10B981)'] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      
      {/* Checkmark inside */}
      <motion.path 
        d="M40 50L47 57L60 40" 
        stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-sec)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />

      {/* Futuristic dots */}
      <circle cx="50" cy="15" r="3" fill="#34D399" />
      <circle cx="20" cy="25" r="3" fill="#34D399" />
      <circle cx="80" cy="25" r="3" fill="#34D399" />
      <circle cx="50" cy="85" r="3" fill="#34D399" />
    </svg>
  );
}

export function MobileIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="mob-grad-1" x1="30" y1="10" x2="70" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="mob-grad-2" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A78BFA" />
          <stop offset="1" stopColor="#5B21B6" />
        </linearGradient>
        <filter id="glow-mob" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Floating background elements */}
      <motion.rect x="15" y="25" width="20" height="15" rx="4" fill="url(#mob-grad-2)" opacity="0.4"
        animate={{ y: [25, 20, 25] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.rect x="65" y="55" width="25" height="20" rx="4" fill="url(#mob-grad-2)" opacity="0.3"
        animate={{ y: [55, 60, 55] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />

      {/* Phone device */}
      <motion.rect 
        x="33" y="15" width="34" height="70" rx="6" 
        fill="#1e1b4b" stroke="url(#mob-grad-1)" strokeWidth="4" 
        animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Phone Screen Glow */}
      <motion.rect 
        x="37" y="22" width="26" height="52" rx="2" 
        fill="url(#mob-grad-1)" opacity="0.15" filter="url(#glow-mob)"
        animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* UI Elements inside phone */}
      <rect x="42" y="28" width="16" height="6" rx="2" fill="url(#mob-grad-2)" />
      <rect x="42" y="40" width="10" height="4" rx="1" fill="#A78BFA" opacity="0.6" />
      <rect x="42" y="48" width="14" height="4" rx="1" fill="#A78BFA" opacity="0.6" />
      <rect x="42" y="56" width="8" height="4" rx="1" fill="#A78BFA" opacity="0.6" />
      
      {/* Notification dot */}
      <motion.circle cx="60" cy="20" r="4" fill="#F472B6" filter="url(#glow-mob)"
        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }} />
    </svg>
  );
}
