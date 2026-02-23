'use client';

import React from 'react';
import { Lock } from 'lucide-react';
import { useTier, Tier } from '@/contexts/tier-context';

const TIER_ORDER: Tier[] = ['essential', 'professional', 'premium'];

const TIER_LABELS: Record<Tier, string> = {
  essential: 'Essencial',
  professional: 'Profissional',
  premium: 'Premium',
};

const TIER_COLORS: Record<Tier, string> = {
  essential: 'bg-slate-500',
  professional: 'bg-blue-600',
  premium: 'bg-amber-500',
};

function tierIndex(tier: Tier) {
  return TIER_ORDER.indexOf(tier);
}

interface TierLockProps {
  requiredTier: 'professional' | 'premium';
  children: React.ReactNode;
}

export function TierLock({ requiredTier, children }: TierLockProps) {
  const { selectedTier } = useTier();
  const isLocked = tierIndex(selectedTier) < tierIndex(requiredTier);

  if (!isLocked) return <>{children}</>;

  return (
    <div className="relative">
      <div className="blur-sm pointer-events-none select-none">
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] z-10">
        <div className="flex flex-col items-center gap-3 text-center p-6">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${TIER_COLORS[requiredTier]}`}>
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm drop-shadow">
              Disponível no plano
            </p>
            <span className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold text-white shadow ${TIER_COLORS[requiredTier]}`}>
              {TIER_LABELS[requiredTier]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
