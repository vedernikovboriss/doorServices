'use client';

import React, { useLayoutEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const StatsSection = () => {
  const stats = useMemo(
    () => [
      { title: 'Лет опыта', value: 25, subvalue: '+' },
      { title: 'Завершенных проектов', value: 500, subvalue: '+' },
      { title: 'Счастливых клиентов', value: 1000, subvalue: '+' },
      { title: 'Положительных отзывов', value: 98, subvalue: '%' },
    ],
    []
  );

  return (
    <section className="section-base-padding flex flex-col gap-8">
      <h2 className="subtitle text-(--accent)">(Факты о нас)</h2>
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        {stats.map((stat) => (
          <StatsItem
            key={stat.title}
            title={stat.title}
            value={stat.value}
            subvalue={stat.subvalue}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

export const StatsItem = ({
  title,
  value,
  subvalue,
}: {
  title: string;
  value: number;
  subvalue: string;
}) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLSpanElement | null>(null);

  const safeValue = useMemo(
    () => (Number.isFinite(value) ? value : 0),
    [value]
  );

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerEl = itemRef.current;
    const numberEl = numberRef.current;
    if (!triggerEl || !numberEl) return;

    // Start from 0 so the animation is always visible.
    const setText = gsap.quickSetter(numberEl, 'textContent');
    setText(`0${subvalue}`);

    const obj = { current: 0 };

    const trigger = ScrollTrigger.create({
      trigger: triggerEl,
      start: 'top 80%', // when the block reaches 20% from bottom
      once: true,
      onEnter: () => {
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
      },
    });

    return () => {
      trigger.kill();
    };
  }, [safeValue, subvalue]);

  return (
    <div
      ref={itemRef}
      className="w-full flex flex-col items-start justify-between gap-8 sm:gap-16 lg:gap-48 p-6 sm:p-8 rounded-sm bg-white"
    >
      <span ref={numberRef} className="numbers-title">
        {value}
        {subvalue}
      </span>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-(--accent) rounded-[2px]" />
        <h2 className="subtitle">{title}</h2>
      </div>
    </div>
  );
};
