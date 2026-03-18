'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useLenis } from 'lenis/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          lenis?.scrollTo(0, { immediate: true });
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    // Re-measure after React effects create triggers for the new route.
    const id = window.setTimeout(() => {
      ScrollTrigger.refresh();
      ScrollTrigger.update();
    }, 0);

    return () => window.clearTimeout(id);
  }, [pathname, lenis]);

  return null;
}
