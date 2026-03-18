import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import Link from 'next/link';
import { services } from '../data/services';
import TextLink from './TextLink/TextLink';
import { ArrowUpRightIcon } from 'lucide-react';
import AnimatedText from './AnimatedText';

export default function ServicesSection() {
  return (
    <section className="section-base-padding min-h-0 lg:min-h-screen bg-(--white) flex gap-8 lg:gap-16 flex-col items-center">
      <div className="flex flex-col w-full items-start justify-between gap-6 lg:gap-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8 w-full">
          <AnimatedText as="h2" className="h2">
            Наши Услуги
          </AnimatedText>
          <span className="subtitle text-(--accent)">
            (Как мы можем вам помочь)
          </span>
        </div>
        <AnimatedText as="p" className="p-medium">
          В этом разделе вы найдете информацию о наших услугах. Ознакомьтесь с
          предложениями и убедитесь в широких возможностях нашей команды.
        </AnimatedText>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
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
    <div className="flex flex-col justify-between gap-8 lg:gap-16 p-6 sm:p-8 bg-white rounded-sm">
      <h3 className="card-title">
        {title}
        <span className="text-xs font-semibold ml-1 mt-1 align-top h-full">
          [0{index + 1}]
        </span>
      </h3>
      {link && (
        <TextLink
          href={link}
          className="text-sm cursor-pointer font-medium uppercase text-(--accent)"
        >
          Подробнее
          <ArrowUpRightIcon className="w-4 h-4" />
        </TextLink>
      )}
      <p className="p-small">{description}</p>
    </div>
  );
}
