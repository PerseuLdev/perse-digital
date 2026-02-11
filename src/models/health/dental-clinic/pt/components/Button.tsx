import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  // Base styles include layout, typography, and base transition properties
  const baseStyles = "relative overflow-hidden group px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 backdrop-blur-md";
  
  const variants = {
    // Primary: Glassy Gradient
    // Uses high opacity color but with backdrop blur for edges and inner glow feel
    primary: "bg-gradient-to-r from-teal-500/90 to-emerald-500/90 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/50 border border-white/20",
    
    // Secondary: Light Glass (Frosted White)
    // Perfect for light backgrounds
    secondary: "bg-white/70 text-teal-700 border border-white/60 hover:bg-white/90 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:border-white",
    
    // Outline: Clear Glass
    // Mostly transparent with strong borders
    outline: "bg-white/5 border-2 border-white/40 text-white hover:bg-white/20 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",

    // Glass Dark: For light text on dark backgrounds
    glass: "bg-black/20 border border-white/10 text-white hover:bg-black/30"
  };

  const variantStyle = variants[variant as keyof typeof variants] || variants.primary;

  return (
    <button 
      className={`${baseStyles} ${variantStyle} ${className}`} 
      {...props}
    >
      {/* Shine/Shimmer effect for Primary variant */}
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-in-out skew-x-12" />
      )}

      {/* Subtle shine for Secondary/Glass */}
      {(variant === 'secondary' || variant === 'glass') && (
        <span className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      {/* Ensure text/icon content stays above the effects */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;