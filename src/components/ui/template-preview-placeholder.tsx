'use client';

import { cn } from '@/lib/utils';
import {
  Stethoscope,
  Scale,
  Dumbbell,
  Sparkles,
  GraduationCap,
  Rocket,
  Leaf,
  Building2,
  LucideIcon
} from 'lucide-react';

const categoryIcons: Record<string, LucideIcon> = {
  health: Stethoscope,
  law: Scale,
  fitness: Dumbbell,
  beauty: Sparkles,
  education: GraduationCap,
  tech: Rocket,
  services: Leaf,
  default: Building2
};

interface TemplatePreviewPlaceholderProps {
  category: string;
  colors: string[];
  title: string;
  className?: string;
}

export function TemplatePreviewPlaceholder({
  category,
  colors,
  title,
  className
}: TemplatePreviewPlaceholderProps) {
  const Icon = categoryIcons[category] || categoryIcons.default;
  const primaryColor = colors[0] || '#004AAD';
  const secondaryColor = colors[1] || '#F8FAFC';

  return (
    <div
      className={cn(
        "w-full h-full relative overflow-hidden",
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${primaryColor}08 0%, ${secondaryColor}40 50%, ${primaryColor}15 100%)`
      }}
    >
      {/* Simulated browser header */}
      <div
        className="absolute top-0 left-0 right-0 h-6 flex items-center gap-1 px-2"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="w-2 h-2 rounded-full bg-white/30" />
        <div className="w-2 h-2 rounded-full bg-white/30" />
        <div className="w-2 h-2 rounded-full bg-white/30" />
        <div className="flex-1 mx-2 h-3 bg-white/10 rounded" />
      </div>

      {/* Simulated hero section */}
      <div className="absolute top-8 left-0 right-0 px-3">
        {/* Navigation bar */}
        <div className="flex justify-between items-center mb-4">
          <div
            className="w-14 h-3 rounded"
            style={{ backgroundColor: `${primaryColor}30` }}
          />
          <div className="flex gap-2">
            <div className="w-6 h-2 rounded bg-slate-200" />
            <div className="w-6 h-2 rounded bg-slate-200" />
            <div className="w-6 h-2 rounded bg-slate-200" />
          </div>
        </div>

        {/* Hero content */}
        <div
          className="rounded-lg p-4 mb-4"
          style={{
            background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`
          }}
        >
          <div className="space-y-2 mb-3">
            <div className="w-3/4 h-3 rounded bg-white/80" />
            <div className="w-2/3 h-3 rounded bg-white/60" />
            <div className="w-1/2 h-2 rounded bg-white/40" />
          </div>
          <div
            className="w-16 h-4 rounded"
            style={{ backgroundColor: secondaryColor }}
          />
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-md p-2 bg-white/80 shadow-sm"
            >
              <div
                className="w-4 h-4 rounded mb-1"
                style={{ backgroundColor: `${primaryColor}20` }}
              />
              <div className="w-full h-1.5 rounded bg-slate-200 mb-1" />
              <div className="w-2/3 h-1 rounded bg-slate-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Center icon overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08]"
        style={{ color: primaryColor }}
      >
        <Icon className="w-32 h-32" />
      </div>

      {/* Decorative gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16"
        style={{
          background: `linear-gradient(to top, ${secondaryColor}80, transparent)`
        }}
      />
    </div>
  );
}
