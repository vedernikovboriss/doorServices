import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import ButtonPrimary from './ButtonPrimary';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center min-h-[100dvh] text-(--white) bg-(--black) pt-12 pb-12 px-4 sm:px-5 lg:px-[2vw] overflow-x-hidden box-border">
      <div className="relative flex flex-col gap-4 sm:gap-6 lg:gap-8 h-full min-h-[70dvh] justify-center min-w-0 z-10">
        <div className="flex flex-col gap-0 w-full max-w-full min-w-0">
          <h1 className="h1">
            <span className="block">Монтаж межкомнатных дверей. </span>
            <span className="block">Качество, которому доверяют.</span>
          </h1>
          {/*<ArrowUpRight
            size={200}
            className="self-start shrink-0 scale-110"
            strokeWidth={1.5}
          />*/}
        </div>

        <p className="p-medium">
          Мы занимаемся монтажом межкомнатных дверей уже более 25 лет. Наши
          мастера имеют большой опыт и выполняют работы быстро и качественно.
        </p>
        <ButtonPrimary isDark={false}>Заказать услугу</ButtonPrimary>
      </div>
      <div className="absolute bottom-[2vw] right-[2vw] z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 opacity-80">
        <ArrowUpRightIcon />
      </div>

      <div className="absolute z-0 bottom-0 right-0 w-full h-full overflow-hidden rounded-sm opacity-35 pointer-events-none">
        <Image
          className="w-full h-full object-cover"
          src="/heroImg.avif"
          alt="Hero Section"
          fill
        />
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

function ArrowUpRightIcon() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-7.10599e-07 14.1518C-7.10599e-07 13.1147 0.35387 12.2547 1.06161 11.5718C1.74408 10.8889 2.54028 10.5474 3.45024 10.5474C4.38547 10.5474 5.19431 10.9015 5.87678 11.6098C6.53396 12.318 6.86256 13.1147 6.86256 14V28.0379L6.18009 45.7561L12.436 38.6612L50.0853 1.02439C50.7678 0.341462 51.564 -1.12131e-06 52.4739 -1.12131e-06C53.1058 -1.12131e-06 53.6872 0.164407 54.218 0.493224C54.7488 0.82204 55.1785 1.25203 55.5071 1.7832C55.8357 2.33966 56 2.92141 56 3.52845C56 4.41373 55.6461 5.21048 54.9384 5.9187L17.3649 43.5935L10.3128 49.7778L28.8152 49.1707H42.0095C42.8942 49.1707 43.6904 49.4995 44.3981 50.1572C45.0806 50.8401 45.4218 51.6369 45.4218 52.5474C45.4218 53.458 45.0932 54.2547 44.436 54.9377C43.7788 55.6459 42.9194 56 41.8578 56H3.71564C2.5782 56 1.68088 55.6585 1.0237 54.9756C0.366508 54.2927 0.037914 53.4074 0.037914 52.3198L-7.10599e-07 14.1518Z"
        fill={'var(--white)'}
      />
    </svg>
  );
}
