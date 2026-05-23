type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
  variant?: 'default' | 'light';
};

/**
 * Logo_CoBien — actual Figma asset (74×80 in nav, 120×130 in footer variant).
 * Composed of 2 SVG/PNG groups exported from Figma node 115:5.
 */
export default function Logo({ width = 74, height = 80, className = '' }: LogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Group 1 — top 53.52% */}
      <div className="absolute" style={{ left: 0, right: 0, top: 0, bottom: '46.48%' }}>
        <img alt="" className="absolute inset-0 w-full h-full block" src="/WWF-Cobien/assets/logo-group-1.svg" />
      </div>
      {/* Group 2 — bottom ~48% */}
      <div className="absolute" style={{ left: '0.87%', right: '13.05%', top: '51.54%', bottom: 0 }}>
        <img alt="" className="absolute inset-0 w-full h-full block" src="/WWF-Cobien/assets/logo-group-2.svg" />
      </div>
    </div>
  );
}
