
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'reveal' | 'reveal-left' | 'reveal-right';
  delay?: string;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  animation = "reveal",
  delay = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);

  // Detectar iframe após mount para evitar hydration mismatch
  useEffect(() => {
    const inIframe = typeof window !== 'undefined' && window.self !== window.top;
    setIsInIframe(inIframe);
    if (inIframe) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    // Se já está visível (iframe), não precisa do observer
    if (isInIframe) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' } // Threshold menor e margem maior
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInIframe]);

  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? 'active' : ''} ${delay} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
