'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.stop();

    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true });

    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
      lenis?.start();
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname, lenis]);

  return null;
}
