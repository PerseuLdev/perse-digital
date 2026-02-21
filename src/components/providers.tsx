'use client';

import { ThemeProvider } from 'next-themes';
import { MotionConfig } from 'framer-motion';
import { type ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange={false}
      >
        {children}
      </ThemeProvider>
    </MotionConfig>
  );
}
