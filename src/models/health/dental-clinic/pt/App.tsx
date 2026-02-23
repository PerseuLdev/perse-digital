'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';
import SchedulingModal from './components/SchedulingModal';
import BackToTop from './components/BackToTop';
import EmergencyFloat from './components/EmergencyFloat';
import { TierLock } from '@/components/ui/tier-lock';

const App: React.FC = () => {
  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false);

  const openModal = () => setIsSchedulingModalOpen(true);
  const closeModal = () => setIsSchedulingModalOpen(false);

  return (
    <div className="relative min-h-screen font-sans selection:bg-teal-100 selection:text-teal-900 bg-white">
      
      <Navbar onOpenSchedule={openModal} />
      
      <main>
        <Hero onOpenSchedule={openModal} />

        <FadeIn>
          <About />
        </FadeIn>

        <FadeIn>
          <Services />
        </FadeIn>

        <TierLock requiredTier="professional">
          <FadeIn>
            <BeforeAfter />
          </FadeIn>
        </TierLock>

        <TierLock requiredTier="professional">
          <FadeIn>
            <Team />
          </FadeIn>
        </TierLock>

        <TierLock requiredTier="professional">
          <FadeIn>
            <Testimonials />
          </FadeIn>
        </TierLock>

        <TierLock requiredTier="professional">
          <FadeIn>
            <FAQ />
          </FadeIn>
        </TierLock>

        <Contact />

        <MapSection />
      </main>

      <Footer />

      {/* Modals & Floating Elements */}
      <TierLock requiredTier="professional">
        <EmergencyFloat />
      </TierLock>
      <BackToTop />
      <TierLock requiredTier="professional">
        <SchedulingModal isOpen={isSchedulingModalOpen} onClose={closeModal} />
      </TierLock>
      
    </div>
  );
};

export default App;