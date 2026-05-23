import { ReactNode } from 'react';

type TornTagProps = {
  children: ReactNode;
  bg?: string; // tailwind bg utility e.g. 'bg-ocean-primary'
  color?: string; // tailwind text utility e.g. 'text-ink-white'
  className?: string;
};

/**
 * Torn-edge label tag — vector polygon with irregular cut edges.
 * Matches Figma signature: 18-point irregular polygon, NOT a rounded rect.
 * Auto-sized to children, padding 18px x 9px, height 28px.
 */
export default function TornTag({
  children,
  bg = 'bg-ocean-primary',
  color = 'text-ink-white',
  className = '',
}: TornTagProps) {
  return (
    <span
      className={`relative inline-flex items-center px-[18px] py-[9px] text-tag-up uppercase ${color} ${className}`}
      style={{ minHeight: 28 }}
    >
      {/* Torn-edge polygon background */}
      <span
        className={`absolute inset-0 ${bg}`}
        style={{
          clipPath:
            'polygon(2% 11%, 10% 0%, 22% 7%, 36% 4%, 48% 11%, 62% 0%, 76% 7%, 88% 4%, 96% 0%, 99% 11%, 100% 89%, 92% 100%, 78% 96%, 65% 100%, 50% 93%, 35% 100%, 22% 96%, 10% 100%, 4% 93%, 0% 89%)',
        }}
      />
      <span className="relative">{children}</span>
    </span>
  );
}
