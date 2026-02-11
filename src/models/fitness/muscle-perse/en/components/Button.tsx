'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "relative px-8 py-4 font-heading font-bold uppercase tracking-widest text-sm transition-all duration-300 border border-transparent rounded-none flex items-center justify-center gap-2 group overflow-hidden";

  const variants = {
    primary: "bg-brand-orange text-black hover:bg-white hover:text-black border-brand-orange hover:border-white",
    outline: "bg-transparent text-white border-white/30 hover:border-brand-orange hover:text-brand-orange",
    white: "bg-white text-black hover:bg-brand-orange hover:text-white border-white hover:border-brand-orange"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Sharp diagonal shine effect on hover could go here, keeping it simple for now */}
    </motion.button>
  );
};
