import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import ButtonPrimary from './ButtonPrimary';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex flex-col min-h-screen text-(--black) pt-14 sm:pt-16 pb-8 sm:pb-[2vw] px-4 sm:px-5 lg:px-[2vw] overflow-x-hidden box-border gap-6 sm:gap-8 justify-end">
      <h1 className="h1">
        <span className="block">Монтаж межкомнатных дверей. </span>
        <span className="block">Качество, которому доверяют.</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="relative w-full h-full overflow-hidden rounded-lg min-h-[220px] sm:min-h-[320px] lg:min-h-[400px] order-2 lg:order-1">
          <Image
            className="w-full h-full object-cover"
            src="/heroImg5.png"
            alt="Hero Section"
            objectFit="cover"
            fill
          />
        </div>
        <div className="flex flex-col gap-6 lg:gap-8 order-1 lg:order-2">
          <p className="p-medium">
            Мы занимаемся монтажом межкомнатных дверей уже более 25 лет. Наши
            мастера имеют большой опыт и выполняют работы быстро и качественно.
          </p>
          <ButtonPrimary isDark={true}>Заказать услугу</ButtonPrimary>
        </div>
      </div>
    </section>
  );
}

function StatisticItem({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex flex-col items-start justify-center gap-32 h-full px-8 border-r border-(--white)/20 border-(--black)/20">
      <span className="text-[5rem] font-light leading-[0.8]">{value}</span>
      <span className="text-sm font-medium uppercase line-height-1">
        {title}
      </span>
    </div>
  );
}
