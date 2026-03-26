'use client';

import React, { useMemo } from 'react';
import StatsItem from './StatsItem';

const StatsSection = () => {
  const stats = useMemo(
    () => [
      { title: 'Лет опыта', value: 23, subvalue: '+' },
      { title: 'Успешных Проектов', value: 28, subvalue: 'К+' },
      { title: 'Года Гарантии', value: 3, subvalue: '' },
    ],
    []
  );

  return (
    <section className="section-base-padding">
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        <div className="w-full h-full flex items-center justify-center bg-(--gray) min-h-[200px] sm:min-h-[200px] md:min-h-[150px] lg:min-h-0">
          <StatSVG className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-full lg:h-full max-w-[175px] max-h-[175px]" />
        </div>
        {stats.map((stat) => (
          <StatsItem
            key={stat.title}
            title={stat.title}
            value={stat.value}
            subvalue={stat.subvalue}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

function StatSVG({ className }: { className?: string }) {
  return (
    <svg
      width="364"
      height="444"
      viewBox="0 0 364 444"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7 344C7 299.088 15.8461 254.616 33.0332 213.122C50.2203 171.629 75.4118 133.927 107.169 102.169C138.927 70.4118 176.629 45.2203 218.122 28.0332C259.616 10.8461 304.088 2 349 2"
        stroke="var(--white)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
      <rect y="344" width="15" height="100" rx="2" fill="var(--white)" />
      <rect
        x="349"
        y="344"
        width="15"
        height="100"
        rx="2"
        fill="var(--white)"
      />
      <rect x="342" width="15" height="345" rx="1" fill="var(--white)" />
      <line
        x1="16"
        y1="442"
        x2="348"
        y2="442"
        stroke="var(--white)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
      <line
        x1="16"
        y1="344"
        x2="348"
        y2="344"
        stroke="var(--white)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
    </svg>
  );
}
