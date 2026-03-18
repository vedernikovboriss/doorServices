'use client';

import { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';

export default function ViewportChangeRefresh() {
  const lenis = useLenis();

  useEffect(() => {
    let rafId = 0;

    const refresh = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        try {
          ScrollTrigger.refresh();
          ScrollTrigger.update();
        } catch {
          // During transitions/route swaps some triggers may be mid-teardown.
          // Failing refresh should not crash the app.
        } finally {
          // Lenis might be absent on mobile; if present, it may need a sync.
          try {
          const l = lenis as unknown as { resize?: () => void } | null;
          l?.resize?.();
          } catch {
            // ignore
          }
        }
      });
    };

    refresh();

    window.addEventListener('resize', refresh, { passive: true });
    window.addEventListener('orientationchange', refresh);

    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener('resize', refresh);
      vv.addEventListener('scroll', refresh);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', refresh);
      window.removeEventListener('orientationchange', refresh);
      if (vv) {
        vv.removeEventListener('resize', refresh);
        vv.removeEventListener('scroll', refresh);
      }
    };
  }, [lenis]);

  return null;
}

