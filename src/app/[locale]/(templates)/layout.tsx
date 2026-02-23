import React from 'react';
import { TierProvider } from '@/contexts/tier-context';
import { TierSelector } from '@/components/ui/tier-selector';

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return (
    <TierProvider>
      {children}
      <TierSelector />
    </TierProvider>
  );
}
