import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — fires once when the target element enters the viewport.
 *
 * Returns a ref to attach + a boolean indicating whether the element has been
 * revealed yet. Pair with the `.scroll-reveal-paper` CSS class (toggle the
 * `.is-revealed` modifier when `revealed` becomes true).
 *
 * @param threshold IntersectionObserver threshold (default 0.15 — visible when
 *                  ~15% of element is in viewport)
 * @param rootMargin push the trigger zone (default '0px 0px -80px 0px' —
 *                   wait until element is ~80px inside the bottom edge)
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = '0px 0px -80px 0px',
) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    // Respect reduced motion — show immediately.
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return { ref, revealed };
}
