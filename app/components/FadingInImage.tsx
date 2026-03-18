'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const FadingInImage = ({
  image,
  alt,
  className,
}: {
  image: string;
  alt: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) setHasAnimated(true);
  }, [isInView]);

  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-(--black) ${className ?? ''}`}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: hasAnimated ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full h-full"
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default FadingInImage;
