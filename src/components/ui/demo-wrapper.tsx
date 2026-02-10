'use client';

import { useState } from 'react';
import {
  Monitor,
  Smartphone,
  Tablet,
  ArrowLeft,
  ExternalLink,
  ChevronLeft,
  Layout,
  PanelRightOpen,
  PanelRightClose,
  X
} from 'lucide-react';
import { BrowserMockup } from './browser-mockup';
import { MobileMockup } from './mobile-mockup';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface DemoWrapperProps {
  title: string;
  url: string;
  onClose: () => void;
  children?: React.ReactNode;
}

export function DemoWrapper({ title, url, onClose, children }: DemoWrapperProps) {
  const t = useTranslations('demo');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile' | 'split'>('desktop');
  const [showSales, setShowSales] = useState(true);

  const containerSizes = {
    desktop: 'w-full h-full',
    tablet: 'w-[768px] h-[1024px] rounded-3xl border-[12px] border-slate-900 my-8 shadow-2xl',
    mobile: 'w-[375px] h-[667px] rounded-[3rem] border-[12px] border-slate-900 my-8 shadow-2xl',
    split: 'w-full h-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 p-12 overflow-y-auto overflow-x-hidden'
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-100 flex flex-col overflow-hidden">
      {/* Top Bar */}
      <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-8 shadow-sm relative z-20">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600 hover:text-slate-900 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium hidden sm:inline">{t('back')}</span>
          </button>
          <div className="h-6 w-px bg-slate-200 hidden md:block" />
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold hidden md:block">{t('viewing')}</span>
            <h1 className="font-bold text-slate-900">{title}</h1>
          </div>
        </div>

        {/* Device Switcher */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
          <button 
            onClick={() => setDevice('desktop')}
            className={cn(
              "p-2 rounded-lg transition-all",
              device === 'desktop' ? "bg-white shadow-sm text-royal" : "text-slate-400 hover:text-slate-600"
            )}
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setDevice('tablet')}
            className={cn(
              "p-2 rounded-lg transition-all",
              device === 'tablet' ? "bg-white shadow-sm text-royal" : "text-slate-400 hover:text-slate-600"
            )}
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            className={cn(
              "p-2 rounded-lg transition-all",
              device === 'mobile' ? "bg-white shadow-sm text-royal" : "text-slate-400 hover:text-slate-600"
            )}
          >
            <Smartphone className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setDevice('split')}
            className={cn(
              "p-2 rounded-lg transition-all",
              device === 'split' ? "bg-white shadow-sm text-royal" : "text-slate-400 hover:text-slate-600"
            )}
            title={t('combo')}
          >
            <Layout className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setShowSales(!showSales)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl border transition-all font-bold text-sm relative",
              showSales
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200 hover:border-royal hover:text-royal"
            )}
          >
            {showSales ? (
              <PanelRightClose className="w-4 h-4" />
            ) : (
              <PanelRightOpen className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">
              {showSales ? t('hideDetails') : t('showDetails')}
            </span>
            {!showSales && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-royal" />
              </span>
            )}
          </button>

          <Button
            className="bg-royal hover:bg-royal-dark text-white rounded-xl h-10 px-6 whitespace-nowrap hidden md:flex"
            onClick={() => window.open(`https://wa.me/5514991071072?text=Quero o modelo ${title}`, '_blank')}
          >
            {t('cta')}
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Demo Area */}
        <div className="flex-1 overflow-auto bg-slate-200 flex justify-center items-start transition-all duration-500">
          <div className={cn(
            "transition-all duration-500 bg-white overflow-hidden relative",
            containerSizes[device]
          )}>
            {/* Mockup Notch for Mobile */}
            {device === 'mobile' && (
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-10" />
            )}
            
            {device === 'split' ? (
              <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                <div className="w-full lg:w-2/3 max-w-4xl">
                   <BrowserMockup url={url} title={title} className="shadow-2xl" />
                </div>
                <div className="w-[280px] lg:w-[320px] shrink-0">
                   <MobileMockup url={url} title={title} className="shadow-2xl" />
                </div>
              </div>
            ) : (
              <iframe 
                src={url} 
                className="w-full h-full border-none"
                title={title}
              />
            )}
          </div>
        </div>

        {/* Sales Sidebar */}
        <aside className={cn(
          "bg-white border-l shadow-2xl transition-all duration-300 ease-in-out relative z-30",
          showSales ? "w-full md:w-[400px] lg:w-[450px]" : "w-0 overflow-hidden border-transparent"
        )}>
           <button 
             onClick={() => setShowSales(false)}
             className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 z-50 md:hidden"
           >
             <X className="w-6 h-6" />
           </button>
           
           <div className="h-full">
             {children}
           </div>
        </aside>
      </div>
    </div>
  );
}
