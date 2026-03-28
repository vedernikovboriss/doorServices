'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ensureGsapPlugins } from '../lib/gsap';

type StatsItemProps = {
  title: string;
  value: number;
  subvalue?: string;
  note?: string;
};

export default function StatsItem({
  title,
  value,
  subvalue,
  note,
}: StatsItemProps) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLSpanElement | null>(null);

  const safeValue = useMemo(
    () => (Number.isFinite(value) ? value : 0),
    [value]
  );

  useEffect(() => {
    const triggerEl = itemRef.current;

    const numberEl = numberRef.current;
    if (!triggerEl || !numberEl) return;
    ensureGsapPlugins();

    const setText = gsap.quickSetter(numberEl, 'textContent');
    setText(`0${subvalue}`);

    const obj = { current: 0 };
    let played = false;

    const play = () => {
      if (played) return;
      played = true;
      gsap.killTweensOf(obj);
      gsap.to(obj, {
        current: safeValue,
        duration: 1.4,
        ease: 'expo.out',
        overwrite: true,
        onUpdate: () => {
          setText(`${Math.round(obj.current)}${subvalue}`);
        },
        onComplete: () => {
          setText(`${Math.round(safeValue)}${subvalue}`);
        },
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: triggerEl,
      start: 'top 85%',
      once: true,
      onEnter: play,
    });

    ScrollTrigger.refresh();
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const rect = triggerEl.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        play();
      }
    });

    return () => {
      trigger.kill();
    };
  }, [safeValue, subvalue]);

  return (
    <div
      ref={itemRef}
      className="stats-item w-full flex flex-col items-start justify-between gap-8 sm:gap-16 lg:gap-48 lg:min-h-[400px] p-6 sm:p-8 rounded-sm bg-white"
    >
      <div className="flex flex-col gap-2">
        <span ref={numberRef} className="numbers-title">
          {value}
          {subvalue ?? ''}
        </span>
        {note && <span className="p-small">{note}</span>}
      </div>

      <div className="relative flex items-center gap-2 isolate">
        <div className="stat-div absolute left-0 w-3 h-3 bg-(--accent) rounded-[1.5px] z-0" />
        <h2 className="stat-title subtitle relative z-1">{title}</h2>
      </div>
    </div>
  );
}
