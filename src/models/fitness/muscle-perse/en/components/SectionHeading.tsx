'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  align = 'left',
  light = false
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="block font-heading text-brand-orange tracking-[0.2em] uppercase font-bold text-sm mb-2"
      >
        // {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-heading text-4xl md:text-6xl font-bold uppercase leading-tight ${light ? 'text-white' : 'text-white'}`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: align === 'center' ? 100 : 60 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`h-1 bg-brand-orange mt-6 ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
};
