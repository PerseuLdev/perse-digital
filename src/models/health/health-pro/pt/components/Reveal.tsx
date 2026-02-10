
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

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
