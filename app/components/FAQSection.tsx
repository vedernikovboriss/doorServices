'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ButtonPrimary from './ButtonPrimary';
import AnimatedText from './AnimatedText';

const faqItems = [
  {
    question: 'Сколько времени занимает установка одной двери?',
    answer:
      'Средний срок установки одной межкомнатной двери — от 1 до 3 часов в зависимости от сложности проёма, типа двери и необходимости доработки. Точные сроки озвучиваются после замера.',
  },
  {
    question: 'Нужно ли подготавливать проём заранее?',
    answer:
      'Идеально, если проём уже подготовлен: выровнен, имеет правильные размеры и завершены черновые отделочные работы. Мы можем провести замер и дать рекомендации по подготовке или выполнить доработку проёма в рамках монтажа.',
  },
  {
    question: 'Даёте ли вы гарантию на работу?',
    answer:
      'Да. Мы даём гарантию на выполненные монтажные работы. Срок и условия зависят от типа услуги и оговариваются перед началом работ.',
  },
  {
    question: 'Работаете ли вы с дверями клиента или только со своими?',
    answer:
      'Мы монтируем как двери, приобретённые у наших партнёров, так и двери, которые вы купили самостоятельно. Главное — корректные размеры и качество изделия. При необходимости поможем с выбором и заказом.',
  },
  {
    question: 'Как оформить заявку на замер или монтаж?',
    answer:
      'Оставьте заявку через форму на сайте или свяжитесь с нами по телефону. Мы согласуем удобную дату замера или монтажа и ответим на все вопросы.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-base-padding bg-(--white)">
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-between gap-2">
          <h2 className="h2">
            <AnimatedText as="span" className="block">
              Часто
            </AnimatedText>
            <AnimatedText as="span" className="block">
              задаваемые
            </AnimatedText>
            <AnimatedText as="span" className="block">
              вопросы
            </AnimatedText>
          </h2>
          <span className="subtitle text-(--accent)">(FAQ)</span>
        </div>
        <AnimatedText as="p" className="p-medium">
          Ответы на популярные вопросы о замере, монтаже межкомнатных дверей и
          сотрудничестве с нами.
        </AnimatedText>
        <ButtonPrimary>Заказать услугу</ButtonPrimary>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ul className="lg:col-start-2 flex flex-col">
            {faqItems.map((item, index) => (
              <li key={index} className="border-b border-(--black)/10">
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="h4 pr-4">{item.question}</span>
                  <ChevronDown
                    className={`shrink-0 text-(--black) transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-small pb-5 pr-8">{item.answer}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
