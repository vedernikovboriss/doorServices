'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ensureGsapPlugins } from '../lib/gsap';

ensureGsapPlugins();
export default function AboutAttentionReveal({ items }: { items: string[] }) {
  const attentionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = attentionRef.current;
    if (!root) return;

    // Fade in the header subtitle + each list item, staggered.
    const spanEls = Array.from(root.querySelectorAll('span.subtitle'));
    const liEls = Array.from(root.querySelectorAll('ul > li'));
    const elements = [...spanEls, ...liEls] as HTMLElement[];

    if (!elements.length) return;

    gsap.set(elements, { opacity: 0, y: 12 });

    const trigger = ScrollTrigger.create({
      trigger: root,
      start: 'top 80%', // 20% from bottom
      once: true,
      onEnter: () => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
          stagger: 0.07,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      ref={attentionRef}
      className="w-full flex flex-col items-start justify-center gap-2"
    >
      <span className="subtitle">(НА ЧТО МЫ ОБРАЩАЕМ ВНИМАНИЕ)</span>
      <ul className="w-full flex flex-col items-start justify-center">
        {items.map((item, index) => (
          <li
            className="w-full flex items-center gap-2 border-b border-(--black)/10 py-4 "
            key={index}
          >
            <span className="text-sm font-bold opacity-40">
              {'(0' + (index + 1) + ')'}
            </span>
            <span className="text-sm font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
