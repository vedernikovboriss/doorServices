'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';

export function TransitionManager() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.stop();

    if (lenis) {
      lenis.scrollTo(0, { immediate: true, duration: 0 });
    } else {
      window.scrollTo(0, 0);
    }

    // After the next frame, re-measure scroll triggers safely.
    const raf = window.requestAnimationFrame(() => {
      try {
        ScrollTrigger.refresh();
        ScrollTrigger.update();
      } finally {
        // Resume scrolling regardless of refresh result.
        lenis?.start();
      }
    });

    return () => window.cancelAnimationFrame(raf);
  }, [pathname, lenis]);

  return null;
}
