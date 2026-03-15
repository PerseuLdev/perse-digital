import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SchedulingData {
  treatment: string;
  time: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  children: React.ReactNode;
  className?: string;
}
