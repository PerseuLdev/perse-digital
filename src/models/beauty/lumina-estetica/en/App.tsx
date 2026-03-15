'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';
import BackToTop from './components/BackToTop';
import SchedulingModal from './components/SchedulingModal';
import { TierLock } from '@/components/ui/tier-lock';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen font-sans selection:bg-[#F5EDE3] selection:text-[#7C5C3E] bg-white">

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
            <Gallery />
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
      </main>

      <Footer />

      <BackToTop />

      <TierLock requiredTier="professional">
        <SchedulingModal isOpen={isModalOpen} onClose={closeModal} />
      </TierLock>

    </div>
  );
};

export default App;
