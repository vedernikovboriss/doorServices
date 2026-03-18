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
          ScrollTrigger.refresh();
          ScrollTrigger.update();
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
      ScrollTrigger.refresh();
      ScrollTrigger.update();
    }
  }, [pathname, lenis]);

  return null;
}
