'use client';

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
          <stop offset="1" stopColor="#1E40AF" />
        </linearGradient>
        <filter id="glow-tu" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Outer ambient glow */}
      <circle cx="50" cy="50" r="42" fill="url(#tu-grad-1)" opacity="0.15" filter="url(#glow-tu)" />
      
      {/* Network lines connecting users */}
      <path d="M50 48 L32 58 M50 48 L68 58" stroke="url(#tu-grad-2)" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      
      {/* Main user figure */}
      <circle cx="50" cy="34" r="11" fill="url(#tu-grad-1)" filter="url(#glow-tu)" />
      <path d="M28 76C28 60 38 50 50 50C62 50 72 60 72 76" stroke="url(#tu-grad-1)" strokeWidth="8" strokeLinecap="round" />
      
      {/* Side user figures */}
      <circle cx="30" cy="44" r="7" fill="#60A5FA" opacity="0.8" />
      <path d="M16 72C16 61 23 54 30 54" stroke="#60A5FA" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
      
      <circle cx="70" cy="44" r="7" fill="#60A5FA" opacity="0.8" />
      <path d="M84 72C84 61 77 54 70 54" stroke="#60A5FA" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
      
      {/* Accents */}
      <circle cx="22" cy="25" r="3" fill="#93C5FD" opacity="0.6" />
      <circle cx="78" cy="28" r="4" fill="#93C5FD" opacity="0.5" />
      <circle cx="55" cy="16" r="2" fill="#93C5FD" opacity="0.7" />
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
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <circle cx="50" cy="50" r="42" fill="url(#tg-grad-1)" opacity="0.15" filter="url(#glow-tg)" />
      
      {/* Globe Base */}
      <circle cx="50" cy="50" r="36" stroke="url(#tg-grad-1)" strokeWidth="4" />
      <circle cx="50" cy="50" r="32" fill="url(#tg-grad-1)" opacity="0.05" />
      
      {/* Geometric Latitudes/Longitudes */}
      <g stroke="url(#tg-grad-2)" strokeWidth="2.5" fill="none" opacity="0.85">
        <ellipse cx="50" cy="50" rx="16" ry="36" />
        <ellipse cx="50" cy="50" rx="36" ry="12" />
        <path d="M25 25 L75 75 M25 75 L75 25" opacity="0.4" strokeDasharray="4 4" />
      </g>
      
      {/* Connection Nodes */}
      <circle cx="34" cy="50" r="4" fill="#34D399" filter="url(#glow-tg)" />
      <circle cx="66" cy="50" r="4" fill="#34D399" filter="url(#glow-tg)" />
      <circle cx="50" cy="14" r="4" fill="#34D399" filter="url(#glow-tg)" />
      <circle cx="50" cy="86" r="4" fill="#34D399" filter="url(#glow-tg)" />
      
      <circle cx="50" cy="50" r="5" fill="#10B981" />
      
      {/* Accents */}
      <path d="M12 50 A38 38 0 0 1 20 28" stroke="#34D399" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <path d="M88 50 A38 38 0 0 0 80 72" stroke="#34D399" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
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
        <filter id="glow-ts" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="glow-core" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur2" />
          <feComposite in="SourceGraphic" in2="blur2" operator="over" />
        </filter>
      </defs>
      
      <circle cx="50" cy="50" r="42" fill="url(#ts-grad-1)" opacity="0.15" filter="url(#glow-ts)" />
      
      {/* Static Burst Rays */}
      <g stroke="url(#ts-grad-1)" strokeWidth="3" strokeLinecap="round" opacity="0.5">
        <line x1="50" y1="12" x2="50" y2="4" />
        <line x1="50" y1="88" x2="50" y2="96" />
        <line x1="12" y1="50" x2="4" y2="50" />
        <line x1="88" y1="50" x2="96" y2="50" />
        <line x1="23" y1="23" x2="17" y2="17" />
        <line x1="77" y1="77" x2="83" y2="83" />
        <line x1="23" y1="77" x2="17" y2="83" />
        <line x1="77" y1="23" x2="83" y2="17" />
      </g>

      {/* Main Star */}
      <path 
        d="M50 14L61.5 37.5L87 40L68 58L72.5 83L50 71L27.5 83L32 58L13 40L38.5 37.5L50 14Z" 
        fill="url(#ts-grad-2)" stroke="#FDE68A" strokeWidth="2" strokeLinejoin="round" filter="url(#glow-ts)"
      />
      
      {/* Inner Highlight for Depth */}
      <path 
        d="M50 25L57 40L73 42L61 54L64 70L50 63L36 70L39 54L27 42L43 40L50 25Z" 
        fill="#FFFFFF" opacity="0.35" filter="url(#glow-core)"
      />
    </svg>
  );
}

export function TrustClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="tc-grad-1" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="tc-grad-2" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDD6FE" />
          <stop offset="1" stopColor="#4C1D95" />
        </linearGradient>
        <filter id="glow-tc" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <circle cx="50" cy="50" r="42" fill="url(#tc-grad-1)" opacity="0.15" filter="url(#glow-tc)" />
      
      {/* Outer rim */}
      <circle cx="50" cy="50" r="38" stroke="url(#tc-grad-1)" strokeWidth="4" strokeDasharray="14 6" fill="none" opacity="0.9" />
      <circle cx="50" cy="50" r="31" stroke="url(#tc-grad-2)" strokeWidth="1.5" opacity="0.7" fill="none" />
      <circle cx="50" cy="50" r="31" fill="url(#tc-grad-1)" opacity="0.1" />
      
      {/* Clock ticks */}
      <g stroke="#C4B5FD" strokeWidth="3" strokeLinecap="round" opacity="0.8">
        <line x1="50" y1="22" x2="50" y2="28" />
        <line x1="78" y1="50" x2="72" y2="50" />
        <line x1="50" y1="78" x2="50" y2="72" />
        <line x1="22" y1="50" x2="28" y2="50" />
      </g>
      
      <g fill="#A855F7" opacity="0.6">
        <circle cx="70" cy="30" r="2" />
        <circle cx="70" cy="70" r="2" />
        <circle cx="30" cy="70" r="2" />
        <circle cx="30" cy="30" r="2" />
      </g>

      {/* Clock hands fixed at 10:10 (aesthetic positioning) */}
      <line x1="50" y1="50" x2="62" y2="38" stroke="url(#tc-grad-2)" strokeWidth="3" strokeLinecap="round" filter="url(#glow-tc)" />
      <line x1="50" y1="50" x2="35" y2="45" stroke="#C4B5FD" strokeWidth="4" strokeLinecap="round" filter="url(#glow-tc)" />
      
      {/* Center pin */}
      <circle cx="50" cy="50" r="5" fill="#FFFFFF" filter="url(#glow-tc)" />
      <circle cx="50" cy="50" r="2" fill="#6D28D9" />

      {/* Checkmark accent (to signify 'guaranteed') */}
      <path d="M60 65 L68 73 L85 54" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-tc)" />
    </svg>
  );
}

