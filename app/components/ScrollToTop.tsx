'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.stop();

    if (lenis) {
      lenis.scrollTo(0, { immediate: true, duration: 0 });
    } else {
      window.scrollTo(0, 0);
    }

    const raf = requestAnimationFrame(() => {
      try {
        ScrollTrigger.refresh();
        ScrollTrigger.update();
      } finally {
        lenis?.start();
      }
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname, lenis]);

  return null;
}
