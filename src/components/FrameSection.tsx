import { CSSProperties, ReactNode } from 'react';

const FRAME_W = 1440;

type FrameSectionProps = {
  height: number;
  background?: string; // CSS background value (color, gradient, etc.)
  /**
   * Full-bleed layer — renders BEHIND the 1440 grid container, extends to viewport edges.
   * Use for: wave dividers, seagrass fields, full-width photo backgrounds.
   * Children inside this slot should use `width: 100%` (or `width: 50%` for halves)
   * and `height: auto` (or fixed) — NEVER stretch horizontally.
   */
  fullBleed?: ReactNode;
  /**
   * Grid-locked children — rendered inside a 1440×height container, centered.
   * Use Figma absolute positions (x/y) directly here.
   */
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Override clip behavior (default: clip overflow to keep full-bleed from spilling beyond section) */
  overflow?: 'hidden' | 'visible';
};

/**
 * Responsive section wrapper.
 *
 * Layout pattern at any viewport ≥ 1440px:
 *   ┌─────────────── viewport width (100%) ───────────────┐
 *   │ background (full-bleed)                              │
 *   │ ┌─ full-bleed assets (waves, photo bgs) ──────────┐ │
 *   │ │                                                  │ │
 *   │ │   ┌─── 1440px centered grid ───┐                │ │
 *   │ │   │ grid-locked content        │                │ │
 *   │ │   │ (x/y from Figma)           │                │ │
 *   │ │   └────────────────────────────┘                │ │
 *   │ └──────────────────────────────────────────────────┘ │
 *   └──────────────────────────────────────────────────────┘
 */
export default function FrameSection({
  height,
  background,
  fullBleed,
  children,
  className = '',
  style,
  overflow = 'hidden',
}: FrameSectionProps) {
  return (
    <section
      className={`relative ${className}`}
      style={{
        width: '100%',
        minWidth: FRAME_W,
        height,
        background,
        overflow,
        ...style,
      }}
    >
      {/* Layer 1: full-bleed (extends to viewport edges, behind grid) */}
      {fullBleed}

      {/* Layer 2: grid-locked content (1440 centered).
          Explicit z-index: 10 to ensure content sits ABOVE any full-bleed z-indexed
          items (gradient overlays, waves, photos). Without this, `transform`
          creates a stacking context and fullBleed items with z:1/2 can render
          on top of content (whose z-index values are trapped inside this context). */}
      <div
        className="absolute"
        style={{
          left: '50%',
          top: 0,
          transform: 'translateX(-50%)',
          width: FRAME_W,
          height,
          zIndex: 10,
        }}
      >
        {children}
      </div>
    </section>
  );
}
