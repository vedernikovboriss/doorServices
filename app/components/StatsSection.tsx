'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ensureGsapPlugins } from '../lib/gsap';

const StatsSection = () => {
  const stats = useMemo(
    () => [
      { title: 'Лет опыта', value: 25, subvalue: '+' },
      { title: 'Завершенных проектов', value: 25, subvalue: 'К+' },
      { title: 'Счастливых клиентов', value: 1000, subvalue: '+' },
    ],
    []
  );

  return (
    <section className="section-base-padding">
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        <div className="w-full h-full flex items-center justify-center bg-(--gray) min-h-[110px] sm:min-h-[125px] md:min-h-[150px] lg:min-h-0">
          <StatSVG className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-full lg:h-full max-w-[175px] max-h-[175px]" />
        </div>
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
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const titleTweenRef = useRef<gsap.core.Tween | null>(null);

  const safeValue = useMemo(
    () => (Number.isFinite(value) ? value : 0),
    [value]
  );

  const handleMouseEnter = () => {
    const titleEl = titleRef.current;
    if (!titleEl) return;
    ensureGsapPlugins();
    titleTweenRef.current?.kill();
    titleTweenRef.current = gsap.to(titleEl, {
      duration: 0.68,
      ease: 'power2.inOut',
      scrambleText: {
        text: title,
        chars: '!@#$%^&*()',
        speed: 0.75,
        newClass: 'charScramble-new',
        oldClass: 'charScramble',
      },
    } as gsap.TweenVars);
  };

  const handleMouseLeave = () => {
    const titleEl = titleRef.current;
    if (!titleEl) return;
    titleTweenRef.current?.kill();
    titleEl.textContent = title;
  };

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
      titleTweenRef.current?.kill();
    };
  }, [safeValue, subvalue]);

  return (
    <div
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="stats-item w-full flex flex-col items-start justify-between gap-8 sm:gap-16 lg:gap-72 p-6 sm:p-8 rounded-sm bg-white"
    >
      <span ref={numberRef} className="numbers-title">
        {value}
        {subvalue}
      </span>

      <div className="relative flex items-center gap-2 isolate">
        <div className="stat-div absolute left-0 w-3 h-3 bg-(--accent) rounded-[1.5px] z-0" />
        <h2 ref={titleRef} className="stat-title subtitle relative z-1">
          {title}
        </h2>
      </div>
    </div>
  );
};

function StatSVG({ className }: { className?: string }) {
  return (
    <svg
      width="364"
      height="444"
      viewBox="0 0 364 444"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7 344C7 299.088 15.8461 254.616 33.0332 213.122C50.2203 171.629 75.4118 133.927 107.169 102.169C138.927 70.4118 176.629 45.2203 218.122 28.0332C259.616 10.8461 304.088 2 349 2"
        stroke="var(--white)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
      <rect y="344" width="15" height="100" rx="2" fill="var(--white)" />
      <rect
        x="349"
        y="344"
        width="15"
        height="100"
        rx="2"
        fill="var(--white)"
      />
      <rect x="342" width="15" height="345" rx="1" fill="var(--white)" />
      <line
        x1="16"
        y1="442"
        x2="348"
        y2="442"
        stroke="var(--white)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
      <line
        x1="16"
        y1="344"
        x2="348"
        y2="344"
        stroke="var(--white)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
    </svg>
  );
}
