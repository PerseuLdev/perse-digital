'use client';

import { useState, useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Monitor,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Zap,
  Cpu
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface Model {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
  features: string[];
  colors: string[];
  objective?: 'leads' | 'scheduling' | 'portfolio' | 'visual';
  demoUrl?: string;
}

interface ModelCardProps {
  model: Model;
  onClickDemo: () => void;
  onClickChoose: () => void;
}

export function ModelCard({ model, onClickDemo, onClickChoose }: ModelCardProps) {
  const t = useTranslations('models.card');
  const tFilters = useTranslations('models.filters');
  const tm = useTranslations(`models.items.${model.id}`);
  const params = useParams();
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const previewUrl = useMemo(() => {
    if (!model.demoUrl) return '';

    // If it's an external URL or static demo, return as is
    if (model.demoUrl.startsWith('http') || model.demoUrl.startsWith('/demos/')) {
      return model.demoUrl;
    }

    // Internal route - prepend locale
    const locale = params.locale as string || 'en';
    return `/${locale}${model.demoUrl}`;
  }, [model.demoUrl, params.locale]);

  return (
    <GlassCard variant="bordered" className="h-full group overflow-hidden flex flex-col">
      {/* Live Preview Container */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        {/* Loading skeleton */}
        {!iframeLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse z-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-3 border-royal/20 border-t-royal rounded-full animate-spin" />
            </div>
          </div>
        )}

        {/* Live iframe preview */}
        <div className={cn(
          "w-full h-full transition-opacity duration-500",
          iframeLoaded ? "opacity-100" : "opacity-0"
        )}>
          {viewMode === 'desktop' ? (
            <div className="relative w-full h-full overflow-hidden">
              {/* Scaled iframe container */}
              <div
                className="absolute top-0 left-0 origin-top-left"
                style={{
                  width: '400%',
                  height: '400%',
                  transform: 'scale(0.25)',
                }}
              >
                <iframe
                  src={previewUrl}
                  className="w-full h-full border-0 pointer-events-none"
                  title={tm('title')}
                  loading="lazy"
                  onLoad={() => setIframeLoaded(true)}
                />
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-50 p-4">
              {/* Mobile preview with phone frame */}
              <div className="relative w-[140px] h-[280px] bg-slate-900 rounded-[2rem] p-1.5 shadow-2xl">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-700 rounded-full" />
                <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                  <div
                    className="origin-top-left"
                    style={{
                      width: '375px',
                      height: '812px',
                      transform: 'scale(0.333)',
                    }}
                  >
                    <iframe
                      src={previewUrl}
                      className="w-full h-full border-0 pointer-events-none"
                      title={`${tm('title')} mobile`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Overlay with Button */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
          <Button 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90"
            onClick={onClickDemo}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            {t('demo')}
          </Button>
        </div>
        
        {/* Technology Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
            <Cpu className="w-3 h-3 text-royal-light" />
            {t('nextjs')}
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
            <Zap className="w-3 h-3 text-amber-400" />
            {t('fast')}
          </div>
        </div>

        {/* Device toggle */}
        <div className="absolute bottom-4 left-4 flex gap-2 z-20">
          <button
            onClick={(e) => { e.stopPropagation(); setViewMode('desktop'); }}
            className={cn(
              "p-2 rounded-lg transition-all duration-300 border backdrop-blur-md",
              viewMode === 'desktop'
                ? "bg-royal text-white border-royal shadow-lg"
                : "bg-black/50 text-white/70 border-white/10 hover:bg-black/70"
            )}
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
             onClick={(e) => { e.stopPropagation(); setViewMode('mobile'); }}
             className={cn(
              "p-2 rounded-lg transition-all duration-300 border backdrop-blur-md",
              viewMode === 'mobile'
                ? "bg-royal text-white border-royal shadow-lg"
                : "bg-black/50 text-white/70 border-white/10 hover:bg-black/70"
            )}
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Delivery Micro-copy */}
        <div className="absolute top-4 right-4 z-20">
          <div className="px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-[10px] font-bold text-white border border-white/10 shadow-lg">
            {t('delivery')}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-royal bg-royal/10 px-3 py-1 rounded-full">
            {tFilters(model.category)}
          </span>
          <div className="flex -space-x-2">
            {model.colors.map((color, i) => (
              <div 
                key={i} 
                className="w-4 h-4 rounded-full border-2 border-background shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-1">{tm('title')}</h3>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-4 font-bold">
          {t(`objectives.${model.objective || 'premium'}`)}
        </p>
        
        <p className="text-muted-foreground mb-6 line-clamp-2 text-sm leading-relaxed">
          {tm('description')}
        </p>

        <ul className="space-y-3 mb-8 flex-1">
          {Object.keys(tm.raw('features')).map((key) => (
            <li key={key} className="flex items-center gap-2 text-sm text-foreground/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="line-clamp-1">{tm(`features.${key}`)}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <Button 
            className="w-full bg-gradient-to-r from-royal to-royal-light shadow-lg shadow-royal/20 hover:scale-[1.02] transition-transform"
            onClick={onClickChoose}
          >
            {t('select')}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          
          <button 
            className="w-full text-center text-xs text-muted-foreground hover:text-royal transition-colors font-medium"
            onClick={onClickDemo}
          >
            {t('learnMore')}
          </button>
        </div>
      </div>
    </GlassCard>
  );
}
