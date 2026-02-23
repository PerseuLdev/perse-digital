'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

function isValidTier(value: unknown): value is Tier {
  return value === 'essential' || value === 'professional' || value === 'premium';
}

export type Tier = 'essential' | 'professional' | 'premium';

interface TierContextType {
  selectedTier: Tier;
  setSelectedTier: (tier: Tier) => void;
}

const TierContext = createContext<TierContextType>({
  selectedTier: 'essential',
  setSelectedTier: () => {},
});

export function TierProvider({ children }: { children: React.ReactNode }) {
  const [selectedTier, setSelectedTier] = useState<Tier>('essential');

  // When inside an iframe, receive tier changes broadcast from the preview page
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'PERSE_TIER_CHANGE' && isValidTier(e.data.tier)) {
        setSelectedTier(e.data.tier);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <TierContext.Provider value={{ selectedTier, setSelectedTier }}>
      {children}
    </TierContext.Provider>
  );
}

export function useTier() {
  return useContext(TierContext);
}
