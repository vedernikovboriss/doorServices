'use client';

import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { useLenis } from 'lenis/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useLayoutEffect(() => {
    // Important: `useLayoutEffect` runs before child layout effects.
    // This ensures ScrollTriggers created by the next page don't start in
    // an "already scrolled past" state.
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, duration: 0 });
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
