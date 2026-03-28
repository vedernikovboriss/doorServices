'use client';

import React, { useMemo } from 'react';
import StatsItem from './StatsItem';

const StatsSection = () => {
  const stats = useMemo(
    () => [
      { title: 'Лет опыта', value: 23, subvalue: '+' },
      { title: 'Успешных Проектов', value: 28, subvalue: 'К+' },
      { title: 'Профессионалов в штате', value: 30, subvalue: '+' },
      { title: 'Года Гарантии', value: 3, subvalue: '' },
    ],
    []
  );

  return (
    <section className="section-base-padding">
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
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
