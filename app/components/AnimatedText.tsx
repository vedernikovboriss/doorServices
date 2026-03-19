'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const el = headingRef.current;
    if (!el) return;

    let split: InstanceType<typeof SplitText> | null = null;
    let trigger: ScrollTrigger | null = null;

    const run = () => {
      try {
        split = SplitText.create(el, {
          type: 'lines',
          linesClass: 'heading-line',
          mask: 'lines',
          autoSplit: true,
        });
      } catch {
        return;
      }

      if (!split?.lines?.length) return;

      gsap.set(split.lines, { yPercent: 100, force3D: true });

      let played = false;
      const play = () => {
        if (played || !split?.lines?.length) return;
        played = true;
        gsap.killTweensOf(split.lines);
        gsap.to(split.lines, {
          yPercent: 0,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.08,
          force3D: true,
        });
      };

      trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: play,
      });

      ScrollTrigger.refresh();
      // Hero / top-of-page text: trigger may never fire onEnter until scroll.
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          play();
        }
      });
    };

    requestAnimationFrame(run);

    return () => {
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
