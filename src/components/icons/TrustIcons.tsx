'use client';

import { motion } from 'framer-motion';

export function TrustUsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="tu-grad-1" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="tu-grad-2" x1="10" y1="50" x2="90" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#93C5FD" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <filter id="glow-tu" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Outer ambient glow */}
      <circle cx="50" cy="50" r="40" fill="url(#tu-grad-1)" opacity="0.15" filter="url(#glow-tu)" />
      
      {/* Network lines */}
      <motion.path 
        d="M50 45 L35 60 M50 45 L65 60" 
        stroke="url(#tu-grad-2)" strokeWidth="2" strokeLinecap="round" opacity="0.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Main figure */}
      <motion.circle 
        cx="50" cy="35" r="10" 
        fill="url(#tu-grad-1)" 
        animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
      />
      <motion.path 
        d="M30 75C30 60 40 50 50 50C60 50 70 60 70 75" 
        stroke="url(#tu-grad-1)" strokeWidth="8" strokeLinecap="round" 
        animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
      />
      
      {/* Side figures */}
      <circle cx="32" cy="42" r="6" fill="#60A5FA" opacity="0.6" />
      <path d="M18 70C18 60 25 54 32 54" stroke="#60A5FA" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      
      <circle cx="68" cy="42" r="6" fill="#60A5FA" opacity="0.6" />
      <path d="M82 70C82 60 75 54 68 54" stroke="#60A5FA" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      
      {/* Floating particles */}
      <motion.circle cx="20" cy="25" r="2" fill="#93C5FD" animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.circle cx="80" cy="30" r="2.5" fill="#93C5FD" animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />
      <motion.circle cx="50" cy="15" r="1.5" fill="#93C5FD" animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
    </svg>
  );
}

export function TrustGlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="tg-grad-1" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="tg-grad-2" x1="0" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#065F46" />
        </linearGradient>
        <filter id="glow-tg" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <circle cx="50" cy="50" r="40" fill="url(#tg-grad-1)" opacity="0.15" filter="url(#glow-tg)" />
      
      {/* Globe Base */}
      <circle cx="50" cy="50" r="35" stroke="url(#tg-grad-1)" strokeWidth="4" />
      
      {/* Rotating Latitudes/Longitudes */}
      <motion.g animate={{ rotateY: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} style={{ originX: '50px', originY: '50px' }}>
        <ellipse cx="50" cy="50" rx="15" ry="35" stroke="url(#tg-grad-2)" strokeWidth="2" fill="none" opacity="0.8" />
        <ellipse cx="50" cy="50" rx="35" ry="10" stroke="url(#tg-grad-2)" strokeWidth="2" fill="none" opacity="0.8" />
        
        {/* Connection Nodes */}
        <circle cx="37" cy="40" r="3" fill="#34D399" />
        <circle cx="63" cy="60" r="3" fill="#34D399" />
        <circle cx="50" cy="15" r="3" fill="#34D399" />
        <circle cx="50" cy="85" r="3" fill="#34D399" />
      </motion.g>
      
      {/* Connecting lines popping up */}
      <motion.path 
        d="M20 50 Q 50 10 80 50" 
        stroke="#34D399" strokeWidth="1.5" strokeDasharray="5 5" fill="none" opacity="0"
        animate={{ opacity: [0, 0.4, 0], pathLength: [0, 1] }} transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.path 
        d="M20 50 Q 50 90 80 50" 
        stroke="#34D399" strokeWidth="1.5" strokeDasharray="5 5" fill="none" opacity="0"
        animate={{ opacity: [0, 0.4, 0], pathLength: [0, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />
    </svg>
  );
}

export function TrustStarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="ts-grad-1" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
        <radialGradient id="ts-grad-2" cx="50" cy="50" r="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" />
          <stop offset="1" stopColor="#B45309" />
        </radialGradient>
        <filter id="glow-ts" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <motion.circle 
        cx="50" cy="50" r="40" fill="url(#ts-grad-1)" opacity="0.15" filter="url(#glow-ts)" 
        animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Burst rays */}
      {[...Array(8)].map((_, i) => (
        <motion.line 
          key={i}
          x1="50" y1="50" x2={50 + 40 * Math.cos((i * 45 * Math.PI) / 180)} y2={50 + 40 * Math.sin((i * 45 * Math.PI) / 180)}
          stroke="url(#ts-grad-1)" strokeWidth="2" strokeLinecap="round"
          animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* Main Star */}
      <motion.path 
        d="M50 15L60.5 36.5L84 40L67 56.5L71 80L50 69L29 80L33 56.5L16 40L39.5 36.5L50 15Z" 
        fill="url(#ts-grad-2)" stroke="#FDE68A" strokeWidth="2" strokeLinejoin="round" filter="url(#glow-ts)"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ originX: '50px', originY: '50px' }}
      />
      
      {/* Inner reflection */}
      <motion.path 
        d="M50 25L57 39L72 41L61 52L64 67L50 60L36 67L39 52L28 41L43 39L50 25Z" 
        fill="#FFFFFF" opacity="0.4"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ originX: '50px', originY: '50px' }}
      />
    </svg>
  );
}

export function TrustClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="tc-grad-1" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A78BFA" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="tc-grad-2" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4B5FD" />
          <stop offset="1" stopColor="#4C1D95" />
        </linearGradient>
        <filter id="glow-tc" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <circle cx="50" cy="50" r="40" fill="url(#tc-grad-1)" opacity="0.15" filter="url(#glow-tc)" />
      
      {/* Outer rim spinning */}
      <motion.circle 
        cx="50" cy="50" r="38" stroke="url(#tc-grad-1)" strokeWidth="3" strokeDasharray="30 10" fill="none"
        animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ originX: '50px', originY: '50px' }}
      />
      <circle cx="50" cy="50" r="32" stroke="url(#tc-grad-2)" strokeWidth="1" opacity="0.5" fill="none" />
      
      {/* Clock ticks */}
      {/* 12, 3, 6, 9 ticks */}
      <line x1="50" y1="20" x2="50" y2="26" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" />
      <line x1="80" y1="50" x2="74" y2="50" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="80" x2="50" y2="74" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="50" x2="26" y2="50" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" />

      {/* Clock hands */}
      <motion.line 
        x1="50" y1="50" x2="50" y2="28" 
        stroke="url(#tc-grad-2)" strokeWidth="4" strokeLinecap="round"
        animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ originX: '50px', originY: '50px' }}
      />
      <line x1="50" y1="50" x2="65" y2="50" stroke="#C4B5FD" strokeWidth="3" strokeLinecap="round" />
      
      <circle cx="50" cy="50" r="4" fill="#FFFFFF" filter="url(#glow-tc)" />

      {/* Ambient scanning line */}
      <motion.path
        d="M 50 50 L 50 12 A 38 38 0 0 1 88 50 Z"
        fill="url(#tc-grad-2)" opacity="0.1"
        animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ originX: '50px', originY: '50px' }}
      />
    </svg>
  );
}
