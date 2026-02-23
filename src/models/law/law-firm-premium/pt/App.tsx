'use client';

import React from 'react';
import '../styles.css';
import { TierLock } from '@/components/ui/tier-lock';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas'; // "O que nós fazemos"
import { CaseStudies } from './components/CaseStudies'; // "O que temos feito"
import { Trust } from './components/Trust'; // "Quem confia em nós"
import { Features } from './components/Features';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { BlogSection } from './components/BlogSection';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-neutral-200 selection:bg-gold-500/30">
      <Navbar />
      
      <main>
        <div id="inicio">
          <Hero />
        </div>
        
        <div id="sobre">
          <About />
        </div>

        {/* O que fazemos */}
        <PracticeAreas />
        
        {/* O que temos feito */}
        <TierLock requiredTier="professional">
          <CaseStudies />
        </TierLock>

        {/* Quem confia */}
        <TierLock requiredTier="professional">
          <Trust />
        </TierLock>

        {/* Features */}
        <TierLock requiredTier="professional">
          <Features />
        </TierLock>

        {/* Team */}
        <TierLock requiredTier="professional">
          <Team />
        </TierLock>

        {/* Depoimentos */}
        <TierLock requiredTier="professional">
          <div id="depoimentos">
            <Testimonials />
          </div>
        </TierLock>

        {/* Artigos */}
        <TierLock requiredTier="professional">
          <div id="blog">
            <BlogSection />
          </div>
        </TierLock>

        {/* FAQ */}
        <TierLock requiredTier="professional">
          <FAQ />
        </TierLock>

        {/* Form Split */}
        <div id="contato">
          <ContactForm />
        </div>

        {/* Banner CTA */}
        <TierLock requiredTier="professional">
          <CTA />
        </TierLock>

      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;