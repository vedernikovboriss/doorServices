'use client';

import React from 'react';
import styles from './TextLink.module.css';
import { useTransitionRouter } from 'next-view-transitions';

export default function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useTransitionRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <a onClick={handleClick} className="cursor-pointer">
      <div className={styles.textLinkDiv}>
        <span className={`${styles.textLink1} ${className}`}>{children}</span>
        <span className={`${styles.textLink2} aria-hidden ${className}`}>
          {children}
        </span>
      </div>
    </a>
  );
}
