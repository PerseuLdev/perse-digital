'use client';

import React from 'react';
import '../styles.css';
import { TierLock } from '@/components/ui/tier-lock';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustLogos } from './components/TrustLogos';
import { Benefits } from './components/Benefits';
import { Process } from './components/Process';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-neutral-200 font-sans antialiased selection:bg-[#ffde59]/30">
      <Navbar />
      
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <TierLock requiredTier="professional">
          <section id="clientes">
            <TrustLogos />
          </section>
        </TierLock>

        <section id="beneficios">
          <Benefits />
        </section>

        <TierLock requiredTier="professional">
          <section id="processo">
            <Process />
          </section>
        </TierLock>

        <TierLock requiredTier="professional">
          <section id="solucoes">
            <Features />
          </section>
        </TierLock>

        <TierLock requiredTier="professional">
          <section id="depoimentos">
            <Testimonials />
          </section>
        </TierLock>

        <TierLock requiredTier="professional">
          <section id="planos">
            <Pricing />
          </section>
        </TierLock>

        <TierLock requiredTier="professional">
          <section id="faq">
            <FAQ />
          </section>
        </TierLock>

        <TierLock requiredTier="professional">
          <section id="contato">
            <CTA />
          </section>
        </TierLock>

      </main>

      <Footer />
    </div>
  );
};

export default App;
