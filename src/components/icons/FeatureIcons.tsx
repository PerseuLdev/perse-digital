'use client';

export function UltraFastIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="speed-grad-1" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FCD34D" />
          <stop offset="1" stopColor="#EA580C" />
        </linearGradient>
        <linearGradient id="speed-grad-2" x1="40" y1="10" x2="60" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        <filter id="glow-fast" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="glow-bolt" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur2" />
          <feComposite in="SourceGraphic" in2="blur2" operator="over" />
        </filter>
      </defs>
      
      {/* Outer energy rings */}
      <circle cx="50" cy="50" r="42" stroke="url(#speed-grad-1)" strokeWidth="1.5" strokeDasharray="10 15" strokeLinecap="round" opacity="0.3" />
      <circle cx="50" cy="50" r="34" stroke="url(#speed-grad-2)" strokeWidth="2" strokeDasharray="30 20" strokeLinecap="round" opacity="0.5" />
      
      {/* Background glow */}
      <circle cx="50" cy="50" r="28" fill="url(#speed-grad-1)" opacity="0.15" filter="url(#glow-fast)" />
      
      {/* Lightning Bolt */}
      <path
        d="M58 20L36 50H50L40 80L68 44H52L58 20Z"
        fill="url(#speed-grad-1)"
        stroke="url(#speed-grad-2)"
        strokeWidth="2"
        strokeLinejoin="round"
        filter="url(#glow-fast)"
      />
      {/* Inner Highlight Bolt */}
      <path
        d="M56 22L38 48H52L44 74L63 46H50L56 22Z"
        fill="#FFFFFF"
        opacity="0.4"
        filter="url(#glow-bolt)"
      />
      
      {/* Dynamic particles (Static positions) */}
      <circle cx="34" cy="72" r="3" fill="#FCD34D" filter="url(#glow-bolt)" />
      <circle cx="70" cy="28" r="4" fill="#FCD34D" filter="url(#glow-bolt)" />
      <circle cx="28" cy="35" r="2" fill="#FCD34D" opacity="0.8" />
    </svg>
  );
}

export function SeoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="seo-grad-1" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="seo-grad-2" x1="20" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5B4FC" />
          <stop offset="1" stopColor="#D8B4FE" />
        </linearGradient>
        <filter id="glow-seo" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Target ambient rings */}
      <circle cx="50" cy="50" r="42" fill="url(#seo-grad-1)" opacity="0.1" filter="url(#glow-seo)" />
      <circle cx="50" cy="50" r="36" stroke="url(#seo-grad-1)" strokeWidth="2" opacity="0.2" />
      <circle cx="50" cy="50" r="28" stroke="url(#seo-grad-1)" strokeWidth="2" opacity="0.4" strokeDasharray="4 4" />
      
      {/* Chart lines */}
      <path 
        d="M25 65L40 45L55 55L75 25" 
        stroke="url(#seo-grad-2)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-seo)"
      />
      <path 
        d="M25 65L40 45L55 55L75 25" 
        stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"
      />
      
      {/* Nodes on chart */}
      <circle cx="25" cy="65" r="4.5" fill="#D8B4FE" />
      <circle cx="40" cy="45" r="4.5" fill="#D8B4FE" />
      <circle cx="55" cy="55" r="4.5" fill="#D8B4FE" />
      
      <circle cx="75" cy="25" r="6" fill="#FFFFFF" filter="url(#glow-seo)" />
      <circle cx="75" cy="25" r="3" fill="#7C3AED" />
      
      {/* Floating Star Accent */}
      <path 
        d="M85 18L87.5 24L94 25L89 29.5L90.5 35.5L85 32.5L79.5 35.5L81 29.5L76 25L82.5 24L85 18Z" 
        fill="#FCD34D" filter="url(#glow-seo)"
      />
    </svg>
  );
}

export function SecureIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="sec-grad-1" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="sec-grad-2" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6EE7B7" />
          <stop offset="1" stopColor="#065F46" />
        </linearGradient>
        <filter id="glow-sec" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Radar ambient rings */}
      <circle cx="50" cy="50" r="44" stroke="url(#sec-grad-1)" strokeWidth="1.5" opacity="0.3" />
      <circle cx="50" cy="50" r="36" stroke="url(#sec-grad-1)" strokeWidth="2" opacity="0.4" strokeDasharray="6 6" />
      
      {/* Shield Body */}
      <path 
        d="M50 16L80 26V46C80 66 50 86 50 86C50 86 20 66 20 46V26L50 16Z" 
        fill="url(#sec-grad-1)" fillOpacity="0.25"
        stroke="url(#sec-grad-2)" strokeWidth="4" strokeLinejoin="round"
        filter="url(#glow-sec)"
      />
      <path 
        d="M50 18L77 27.5V46C77 64 50 82 50 82C50 82 23 64 23 46V27.5L50 18Z" 
        fill="url(#sec-grad-1)" fillOpacity="0.1"
      />
      
      {/* Checkmark inside */}
      <path 
        d="M38 52L46 60L64 42" 
        stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-sec)"
      />

      {/* Futuristic dots */}
      <circle cx="50" cy="16" r="3.5" fill="#6EE7B7" />
      <circle cx="20" cy="26" r="3.5" fill="#6EE7B7" />
      <circle cx="80" cy="26" r="3.5" fill="#6EE7B7" />
      <circle cx="50" cy="86" r="3.5" fill="#6EE7B7" />
    </svg>
  );
}

export function MobileIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="mob-grad-1" x1="30" y1="10" x2="70" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A78BFA" />
          <stop offset="1" stopColor="#5B21B6" />
        </linearGradient>
        <linearGradient id="mob-grad-2" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDD6FE" />
          <stop offset="1" stopColor="#4C1D95" />
        </linearGradient>
        <filter id="glow-mob" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Floating background framing elements */}
      <rect x="22" y="25" width="22" height="15" rx="4" fill="url(#mob-grad-2)" opacity="0.25" />
      <rect x="62" y="55" width="22" height="20" rx="4" fill="url(#mob-grad-2)" opacity="0.2" />

      {/* Phone device outer shell */}
      <rect 
        x="33" y="15" width="34" height="70" rx="6" 
        fill="#1E1B4B" stroke="url(#mob-grad-1)" strokeWidth="4" 
      />
      
      {/* Phone Screen Background App/Glow */}
      <rect 
        x="37" y="22" width="26" height="52" rx="3" 
        fill="url(#mob-grad-1)" opacity="0.2" filter="url(#glow-mob)"
      />
      
      {/* UI Elements inside phone */}
      {/* Header mock */}
      <rect x="42" y="28" width="16" height="5" rx="2" fill="url(#mob-grad-2)" opacity="0.8" />
      
      {/* Content blocks mock */}
      <rect x="42" y="38" width="12" height="4" rx="1.5" fill="#C4B5FD" opacity="0.9" />
      <rect x="42" y="46" width="16" height="4" rx="1.5" fill="#C4B5FD" opacity="0.7" />
      <rect x="42" y="54" width="9" height="4" rx="1.5" fill="#C4B5FD" opacity="0.5" />
      <rect x="42" y="62" width="16" height="4" rx="1.5" fill="#C4B5FD" opacity="0.4" />
      
      {/* Home button / Indicator */}
      <line x1="46" y1="78" x2="54" y2="78" stroke="url(#mob-grad-2)" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Notification dot */}
      <circle cx="62" cy="20" r="4.5" fill="#F472B6" filter="url(#glow-mob)" />
      <circle cx="62" cy="20" r="2" fill="#FFFFFF" />
    </svg>
  );
}
