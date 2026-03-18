import React from 'react';
import { vacanciesData } from '../data/vacancies';
import ButtonPrimary from './ButtonPrimary';
import ContactSubinfo from './ContactSubinfo';

export default function VacanciesSection() {
  return (
    <section className="section-padding section-base-padding bg-[var(--white)] flex flex-col items-start gap-8 lg:gap-16">
      <div className="w-full flex flex-col gap-6 lg:gap-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8 w-full">
          <h2 className="h2">Вакансии</h2>
          <span className="subtitle text-(--accent)">(Набор Специалистов)</span>
        </div>
        <p className="p-medium">
          Здесь представлены актуальные вакансии нашей компании. Мы ищем
          талантливых специалистов, готовых развиваться вместе с нами.
          Ознакомьтесь с открытыми позициями и отправьте резюме, если хотите
          присоединиться к нашей команде.
        </p>
        <ButtonPrimary>Откликнуться</ButtonPrimary>{' '}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <div className="hidden lg:block" aria-hidden />
        {vacanciesData.map((vacancy, index) => (
          <VacanciesItem
            key={index}
            index={index}
            title={vacancy.title}
            description={vacancy.description}
            requirements={vacancy.requirements}
            responsibilities={vacancy.responsibilities}
            conditions={vacancy.conditions}
          />
        ))}
      </div>
    </section>
  );
}

function VacanciesItem({
  index,
  title,
  description,
  requirements,
  responsibilities,
  conditions,
}: {
  index: number;
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  conditions: string[];
}) {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 p-6 sm:p-8 bg-white rounded-sm lg:col-span-1">
      <h3 className="card-title">
        {title}
        <span className="text-xs font-semibold ml-1 mt-1 align-top h-full">
          [0{index + 1}]
        </span>
      </h3>
      <div className="flex flex-col gap-8">
        <p className="p-small">{description}</p>
        <div className="flex flex-col gap-4">
          <h4 className="subtitle">(Требования)</h4>
          <ul className="p-small flex flex-col gap-2">
            {requirements.map((requirement, index) => (
              <li key={index}>— {requirement}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="subtitle">(Обязанности)</h4>
          <ul className="p-small flex flex-col gap-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>— {responsibility}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="subtitle">(Условия)</h4>
          <ul className="p-small flex flex-col gap-2">
            {conditions.map((condition, index) => (
              <li key={index}>— {condition}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
