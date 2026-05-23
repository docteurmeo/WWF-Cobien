import { CSSProperties, ReactNode } from 'react';

type PhotoFrameProps = {
  width: number;
  height: number;
  rotate?: number; // degrees
  bg?: string; // tailwind class for placeholder color
  label?: string; // placeholder label text
  className?: string;
  style?: CSSProperties;
  children?: ReactNode; // override default placeholder
  borderWidth?: number; // white frame border width, default 6
  shadow?: 'sm' | 'md' | 'lg'; // photo shadow size
};

/**
 * Polaroid-style photo frame — white border + drop shadow + optional rotation.
 * Used everywhere a real photo should appear.
 */
export default function PhotoFrame({
  width,
  height,
  rotate = 0,
  bg = 'bg-sand-dark',
  label,
  className = '',
  style,
  children,
  borderWidth = 6,
  shadow = 'md',
}: PhotoFrameProps) {
  const shadowClass = {
    sm: 'shadow-photo-sm',
    md: 'shadow-photo',
    lg: 'shadow-photo-lg',
  }[shadow];

  return (
    <div
      className={`relative bg-ink-white ${shadowClass} ${className}`}
      style={{
        width,
        height,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        padding: borderWidth,
        ...style,
      }}
    >
      <div className={`relative w-full h-full ${bg}`}>
        {children}
        {label && !children && (
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <span className="text-body-caption text-ink-white opacity-60 text-center">
              [ {label} ]
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
