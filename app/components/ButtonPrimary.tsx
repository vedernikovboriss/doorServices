'use client';

import { ArrowRight } from 'lucide-react';
import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { useLenis } from 'lenis/react';
import { useTransitionRouter } from 'next-view-transitions';

gsap.registerPlugin(SplitText);

const FORM_SECTION_ID = 'cta-form';

export default function ButtonPrimary({
  isDark = true,
  children,
  isSubmit = false,
  to,
}: {
  isDark?: boolean;
  children: React.ReactNode;
  isSubmit?: boolean;
  href?: string;
  /** Where the button leads (hash or path). Defaults to #cta-form when not submit. */
  to?: string;
}) {
  const router = useTransitionRouter();
  const lenis = useLenis();
  const lenisRef = useRef(lenis);

  useEffect(() => {
    lenisRef.current = lenis;
  }, [lenis]);

  const scrollToForm = useCallback(() => {
    const el = document.getElementById(FORM_SECTION_ID);
    if (!el) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const instance = lenisRef.current;
        if (instance) {
          instance.scrollTo(`#${FORM_SECTION_ID}`, {
            offset: 0,
            immediate: false,
            duration: 1.8,
          });
        } else {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  const text = typeof children === 'string' ? children : null;
  const safeText = text?.replace(/ /g, '\u00A0') ?? null;
  const topRowRef = useRef<HTMLSpanElement>(null);
  const bottomRowRef = useRef<HTMLSpanElement>(null);
  const splitTopRef = useRef<InstanceType<typeof SplitText> | null>(null);
  const splitBottomRef = useRef<InstanceType<typeof SplitText> | null>(null);

  useEffect(() => {
    if (!text || !topRowRef.current || !bottomRowRef.current) return;
    let top: InstanceType<typeof SplitText> | null = null;
    let bottom: InstanceType<typeof SplitText> | null = null;
    try {
      top = SplitText.create(topRowRef.current, {
        type: 'chars',
        charsClass: 'char',
        reduceWhiteSpace: false,
      });
      bottom = SplitText.create(bottomRowRef.current, {
        type: 'chars',
        charsClass: 'char',
        reduceWhiteSpace: false,
      });
      gsap.set(bottom.chars, { yPercent: 100 });
      splitTopRef.current = top;
      splitBottomRef.current = bottom;
    } catch {
      top?.revert();
      bottom?.revert();
    }
    return () => {
      splitTopRef.current?.revert();
      splitBottomRef.current?.revert();
      splitTopRef.current = null;
      splitBottomRef.current = null;
    };
  }, [text]);

  const onEnter = useCallback(() => {
    const top = splitTopRef.current;
    const bottom = splitBottomRef.current;
    if (!top?.chars?.length || !bottom?.chars?.length) return;
    gsap.killTweensOf([top.chars, bottom.chars]);
    gsap.set(top.chars, { yPercent: 0 });
    gsap.set(bottom.chars, { yPercent: 100 });
    const stagger = { each: 0.018, from: 'center' as const };
    gsap.to(top.chars, {
      yPercent: -100,
      duration: 0.35,
      stagger,
      ease: 'power2.out',
    });
    gsap.to(bottom.chars, {
      yPercent: 0,
      duration: 0.35,
      stagger,
      ease: 'power2.out',
    });
  }, []);

  const onLeave = useCallback(() => {
    const top = splitTopRef.current;
    const bottom = splitBottomRef.current;
    if (!top?.chars?.length || !bottom?.chars?.length) return;
    gsap.killTweensOf([top.chars, bottom.chars]);
    const stagger = { each: 0.015, from: 'center' as const };
    gsap.to(top.chars, {
      yPercent: 0,
      duration: 0.28,
      stagger,
      ease: 'power2.out',
    });
    gsap.to(bottom.chars, {
      yPercent: 100,
      duration: 0.28,
      stagger,
      ease: 'power2.out',
    });
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isSubmit && !to) scrollToForm();
    if (to) router.push(to);
  };
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={handleClick}
      className="relative group flex w-fit h-11 gap-1 cursor-pointer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <ButtonPrimaryIcon className="absolute z-0 left-0 top-0 origin-left transition-transform duration-550 ease-in-out scale-0 -rotate-90 group-hover:scale-100 group-hover:rotate-0" />
      <div
        className={`relative z-1 py-4 px-4 flex items-center justify-center rounded-sm text-[0.8rem] tracking-wider whitespace-nowrap 
            font-semibold uppercase transition-transform duration-550 ease-in-out group-hover:translate-x-12 overflow-hidden ${
              isDark
                ? 'text-(--white) bg-(--black)'
                : 'text-(--black) bg-(--white)'
            }`}
      >
        {text ? (
          <span className="relative inline-block h-[1em] leading-none overflow-hidden align-middle">
            <span
              ref={topRowRef}
              className="absolute inset-x-0 top-0 flex h-[1em] items-center whitespace-pre-wrap"
              aria-hidden
            >
              {safeText}
            </span>
            <span
              ref={bottomRowRef}
              className="absolute inset-x-0 top-0 flex h-[1em] items-center whitespace-pre-wrap"
              aria-hidden
            >
              {safeText}
            </span>
            <span className="invisible flex h-[1em] items-center">{text}</span>
          </span>
        ) : (
          children
        )}
      </div>
      <ButtonPrimaryIcon className="relative z-0 origin-right transition-transform duration-550 ease-in-out group-hover:scale-0 group-hover:-rotate-90" />
    </button>
  );
}

function ButtonPrimaryIcon({ className = '' }: { className?: string }) {
  return (
    <div
      className={`h-full bg-(--accent) flex items-center justify-center rounded-sm aspect-square ${className}`}
    >
      <ArrowRight className="text-(--white)" size={15} />
    </div>
  );
}
