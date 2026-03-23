'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ensureGsapPlugins } from '../lib/gsap';

type FadeInOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  start?: string;
  y?: number;
  duration?: number;
};

export default function FadeInOnScroll({
  children,
  className,
  delay = 0,
  start = 'top 88%',
  y = 18,
  duration = 0.9,
}: FadeInOnScrollProps) {
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    ensureGsapPlugins();
    gsap.set(el, { opacity: 0, y });

    const play = () => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: play,
    });

    requestAnimationFrame(() => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
        play();
      }
    });

    return () => {
      trigger.kill();
    };
  }, [delay, duration, start, y]);

  return (
    <div ref={itemRef} className={className}>
      {children}
    </div>
  );
}
