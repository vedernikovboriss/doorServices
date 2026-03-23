'use client';

import type { ReactNode } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ensureGsapPlugins } from './lib/gsap';

ensureGsapPlugins();

type Props = {
  children: ReactNode;
};

function ScrollTriggerLenisSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);

    gsap.ticker.lagSmoothing(0);

    const onScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onScroll);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.off('scroll', onScroll);
    };
  }, [lenis]);

  return null;
}

export default function LenisProvider({ children }: Props) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (isMobile === null || isMobile) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        duration: 1.15,
        autoRaf: false,
      }}
    >
      <ScrollTriggerLenisSync />
      {children}
    </ReactLenis>
  );
}
