'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ensureGsapPlugins } from '../lib/gsap';

ensureGsapPlugins();

type TagType = 'h1' | 'h2' | 'h3' | 'span' | 'p';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  as?: TagType;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className,
  as = 'h2',
}) => {
  const headingRef = useRef<HTMLElement>(null);
  const Tag = as;

  useLayoutEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    let split: InstanceType<typeof SplitText> | null = null;
    let trigger: ScrollTrigger | null = null;
    let played = false;
    let raf1: number;
    let raf2: number;

    raf1 = requestAnimationFrame(() => {
      // ✅ Second frame ensures Lenis has ticked and layout is settled
      raf2 = requestAnimationFrame(() => {
        try {
          split = SplitText.create(el, {
            type: 'lines',
            linesClass: 'heading-line',
            mask: 'lines',
            autoSplit: true,
            onSplit() {
              // ✅ Fires on every resize resplit — keeps hidden state correct
              if (split?.lines?.length) {
                gsap.set(split.lines, { yPercent: 100, force3D: true });
              }
            },
          });
        } catch {
          return;
        }

        if (!split?.lines?.length) return;

        gsap.set(split.lines, { yPercent: 100, force3D: true });

        const play = () => {
          if (played || !split?.lines?.length) return;
          played = true;
          gsap.to(split.lines, {
            yPercent: 0,
            duration: 0.85,
            ease: 'power3.out',
            stagger: 0.08,
            force3D: true,
            // ✅ Prevents stale transforms surviving a ScrollTrigger refresh
            invalidateOnRefresh: true,
          });
        };

        trigger = ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: play,
        });

        ScrollTrigger.refresh();

        // ✅ In-viewport check for hero / above-fold text
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          play();
        }
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      // ✅ Kill tweens before revert so GSAP doesn't tween detached nodes
      if (split?.lines?.length) {
        gsap.killTweensOf(split.lines);
      }
      trigger?.kill();
      trigger = null;
      split?.revert();
      split = null;
    };
  }, [children]);

  return (
    <Tag ref={headingRef as any} className={className}>
      {children}
    </Tag>
  );
};

export default AnimatedText;
