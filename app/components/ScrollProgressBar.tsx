'use client';

import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.6,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-(--accent) origin-[0%] z-9999"
      style={{ scaleX }}
    />
  );
}
