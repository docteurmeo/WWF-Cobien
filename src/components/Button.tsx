import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'coral' | 'ghost-light' | 'outline-light';
  className?: string;
  onClick?: () => void;
};

/**
 * CTA Button variants.
 * - primary: teal bg / white text (default CTA)
 * - coral: coral bg / white text (data/tension CTAs)
 * - ghost-light: white bg / dark text (on dark backgrounds)
 * - outline-light: transparent + ocean-light border (on dark)
 */
export default function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const variants = {
    primary: 'bg-ocean-primary text-ink-white shadow-btn-teal hover:bg-ocean-deep',
    coral: 'bg-coral text-ink-white shadow-btn-coral hover:opacity-90',
    'ghost-light': 'bg-ink-white text-ink-main hover:bg-sand-light',
    'outline-light': 'bg-transparent border-[1.5px] border-ocean-light text-ocean-light hover:bg-white/10',
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-7 py-[15px] rounded-[2px] text-cta-btn transition-all ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
