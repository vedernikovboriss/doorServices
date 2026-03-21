'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();
  // ✅ Keep a stable ref so the effect only re-runs on pathname changes
  const lenisRef = useRef(lenis);

  useEffect(() => {
    lenisRef.current = lenis;
  }, [lenis]);

  useEffect(() => {
    const currentLenis = lenisRef.current;
    let raf1: number;
    let raf2: number;
    let cancelled = false;

    // ✅ Scroll to top immediately — immediate:true cancels any
    //    in-progress Lenis animation without needing stop()/start()
    if (currentLenis) {
      currentLenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // ✅ Double rAF: first frame lets Next.js finish painting the new
    //    page, second frame ensures layout is fully settled before
    //    ScrollTrigger measures element positions
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        if (cancelled) return;
        ScrollTrigger.refresh();
        ScrollTrigger.update();
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
    // ✅ Only pathname as dependency — lenis instance changes shouldn't
    //    re-trigger scroll-to-top on every mount
  }, [pathname]);

  return null;
}
