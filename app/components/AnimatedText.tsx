'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';

type TagType = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface HeadingAnimationProps {
  children: React.ReactNode;
  className?: string;
  as?: TagType;
}

const START_AT = 'top 80%'; // element hits 20% from bottom
const RESIZE_DEBOUNCE_MS = 150;

const AnimatedText: React.FC<HeadingAnimationProps> = ({
  children,
  className,
  as = 'h2',
}) => {
  const headingRef = useRef<HTMLElement>(null);
  const splitRef = useRef<InstanceType<typeof SplitText> | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const hasAnimatedRef = useRef(false);
  const Tag = as;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const el = headingRef.current;
    if (!el) return;

    const build = () => {
      splitRef.current?.revert();
      splitRef.current = null;

      let split: InstanceType<typeof SplitText> | null = null;
      try {
        split = SplitText.create(el, {
          type: 'lines',
          linesClass: 'heading-line',
          mask: 'lines',
          autoSplit: true,
        });
        splitRef.current = split;

        if (split.lines?.length) {
          gsap.set(split.lines, {
            yPercent: hasAnimatedRef.current ? 0 : 100,
            force3D: true,
          });
        }
      } catch {
        split?.revert();
      }
    };

    build();

    const play = () => {
      if (hasAnimatedRef.current) return;
      const split = splitRef.current;
      if (!split?.lines?.length) return;

      gsap.killTweensOf(split.lines);
      gsap.to(split.lines, {
        yPercent: 0,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.08,
        force3D: true,
        overwrite: true,
        onComplete: () => {
          hasAnimatedRef.current = true;
        },
      });
    };

    triggerRef.current?.kill();
    triggerRef.current = ScrollTrigger.create({
      trigger: el,
      start: START_AT,
      once: true,
      onEnter: play,
    });

    let resizeTimeout: ReturnType<typeof setTimeout> | undefined;
    const onResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Re-split after layout changes so line breaks stay correct.
        build();
        triggerRef.current?.refresh();
        ScrollTrigger.refresh();
      }, RESIZE_DEBOUNCE_MS);
    };

    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('resize', onResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      triggerRef.current?.kill();
      triggerRef.current = null;
      splitRef.current?.revert();
      splitRef.current = null;
    };
  }, []);

  return (
    <Tag ref={headingRef as any} className={className}>
      {children}
    </Tag>
  );
};

export default AnimatedText;
