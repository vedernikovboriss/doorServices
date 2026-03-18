'use client';

import type { ReactNode } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

type Props = {
  children: ReactNode;
};

function ScrollTriggerLenisSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Keep GSAP's ScrollTrigger measurements in sync with Lenis's
    // virtualized/animated scrolling.
    const onScroll = () => ScrollTrigger.update();

    // Lenis uses an internal event emitter.
    lenis.on('scroll', onScroll);

    // Ensure triggers calculate their initial positions.
    ScrollTrigger.refresh();
    ScrollTrigger.update();

    // Fallback: keep ScrollTrigger synced even if Lenis doesn't emit events
    // in some browsers/configs.
    let rafId = 0;
    const tick = () => {
      ScrollTrigger.update();
      rafId = window.requestAnimationFrame(tick);
    };
    rafId = window.requestAnimationFrame(tick);

    return () => {
      lenis.off('scroll', onScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, [lenis]);

  return null;
}

/**
 * Uses the official Lenis React wrapper so useLenis() is available
 * and the instance is ready as soon as the tree is mounted.
 */
export default function LenisProvider({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        duration: 1.2,
      }}
    >
      <ScrollTriggerLenisSync />
      {children}
    </ReactLenis>
  );
}
