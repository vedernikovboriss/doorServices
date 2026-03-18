'use client';

import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function ScrollTriggerReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    window.setTimeout(() => {
      ScrollTrigger.refresh();
      ScrollTrigger.update();
    }, 0);
  }, [pathname]);

  return null;
}
