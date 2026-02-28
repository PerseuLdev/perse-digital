'use client';

import React, { useEffect, useState } from 'react';
import { useTier, Tier } from '@/contexts/tier-context';

const tiers: { value: Tier; label: string }[] = [
  { value: 'essential', label: 'Essencial' },
  { value: 'professional', label: 'Profissional' },
  { value: 'premium', label: 'Premium' },
];

export function TierSelector() {
  const { selectedTier, setSelectedTier } = useTier();
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsInIframe(window.self !== window.top);
    } catch {
       
      setIsInIframe(true); // cross-origin iframe blocks access
    }
  }, []);

  // Inside iframe: tier selection lives in the preview page sidebar
  if (isInIframe) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <div className="flex items-center gap-1 p-1.5 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-2xl border border-black/10 dark:border-white/10">
        <span className="text-xs font-medium text-muted-foreground px-2 whitespace-nowrap hidden sm:block">
          Ver plano:
        </span>
        {tiers.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setSelectedTier(value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              selectedTier === value
                ? value === 'premium'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30'
                  : 'bg-primary text-white shadow-md'
                : 'text-foreground/70 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
