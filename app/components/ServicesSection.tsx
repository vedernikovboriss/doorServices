'use client';

import React, { useEffect, useRef } from 'react';
import ButtonPrimary from './ButtonPrimary';
import Link from 'next/link';
import { services } from '../data/services';
import TextLink from './TextLink/TextLink';
import { ArrowUpRightIcon } from 'lucide-react';
import AnimatedText from './AnimatedText';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ensureGsapPlugins } from '../lib/gsap';

type HeadingAs = 'h1' | 'h2' | 'h3' | 'span' | 'p';

export default function ServicesSection({
  headingAs = 'h2',
  isTextAnimated = true,
}: {
  headingAs?: HeadingAs;
  isTextAnimated?: boolean;
}) {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    ensureGsapPlugins();
    const items = Array.from(
      grid.querySelectorAll('.service-item')
    ) as HTMLElement[];
    if (!items.length) return;

    gsap.set(items, { opacity: 0, y: 18 });

    const triggers = items.map((item, index) =>
      ScrollTrigger.create({
        trigger: item,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            delay: index * 0.1,
            overwrite: 'auto',
          });
        },
      })
    );

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="section-base-padding min-h-0 lg:min-h-screen bg-(--white) flex gap-8 lg:gap-16 flex-col items-center">
      <div className="flex flex-col w-full items-start justify-between gap-6 lg:gap-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8 w-full">
          {isTextAnimated ? (
            <AnimatedText as={headingAs} className="h2">
              Наши Услуги
            </AnimatedText>
          ) : (
            <h1 className="h2">Наши Услуги</h1>
          )}

          <span className="subtitle text-(--accent)">
            (Как мы можем вам помочь)
          </span>
        </div>
        {isTextAnimated ? (
          <AnimatedText as="p" className="p-medium">
            Мы берём на себя весь цикл: от технической консультации на объекте,
            замера и технадзора до конечного монтажа с гарантийным обслуживанием
            3 года
          </AnimatedText>
        ) : (
          <p className="p-medium">
            Мы берём на себя весь цикл: от технической консультации на объекте,
            замера и технадзора до конечного монтажа с гарантийным обслуживанием
            3 года
          </p>
        )}
      </div>
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
      >
        {services.map((service, index) => (
          <ServicesItem
            key={index}
            index={index}
            title={service.title}
            description={service.description}
            link={'link' in service ? service.link : undefined}
          />
        ))}
      </div>
      <ButtonPrimary isDark={true}>Заказать услугу</ButtonPrimary>
    </section>
  );
}

function ServicesItem({
  index,
  title,
  description,
  link,
}: {
  index: number;
  title: string;
  description: string;
  link?: string;
}) {
  return (
    <div className="service-item flex flex-col justify-between gap-8 lg:gap-32 lg:min-h-[400px] p-6 sm:p-8 bg-white rounded-sm">
      <h3 className="card-title">
        {title}
        <span className="text-xs font-semibold ml-1 mt-1 align-top h-full">
          [0{index + 1}]
        </span>
      </h3>
      <div className="flex flex-col gap-4">
        <p className="p-small">{description}</p>
        {link && (
          <TextLink
            href={link}
            className="text-sm cursor-pointer font-medium uppercase text-(--accent)"
          >
            Подробнее
            <ArrowUpRightIcon className="w-4 h-4" />
          </TextLink>
        )}
      </div>
    </div>
  );
}
