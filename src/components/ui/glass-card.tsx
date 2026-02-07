'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'strong' | 'subtle' | 'bordered' | 'glow';
  hover?: boolean;
  animated?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', hover = true, animated = false, children, ...props }, ref) => {
    const baseStyles = cn(
      'rounded-3xl transition-all duration-500',
      hover && 'hover:-translate-y-1'
    );

    const variants = {
      default: cn(
        'glass',
        hover && 'hover:shadow-2xl hover:shadow-primary/10'
      ),
      strong: cn(
        'glass-strong',
        hover && 'hover:shadow-2xl hover:shadow-primary/15'
      ),
      subtle: cn(
        'glass-subtle',
        hover && 'hover:bg-white/10 dark:hover:bg-white/5'
      ),
      bordered: cn(
        'bg-card/50 backdrop-blur-xl',
        'border-2 border-primary/20',
        hover && 'hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10'
      ),
      glow: cn(
        'glass',
        'shadow-[0_0_30px_rgba(59,130,246,0.15)]',
        hover && 'hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]'
      ),
    };

    if (animated) {
      return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(baseStyles, variants[variant], className)}
          {...(props as HTMLMotionProps<'div'>)}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export { GlassCard, type GlassCardProps };
