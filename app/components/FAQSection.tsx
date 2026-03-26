'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ButtonPrimary from './ButtonPrimary';
import AnimatedText from './AnimatedText';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ensureGsapPlugins } from '../lib/gsap';

const faqItems = [
  {
    question: 'Сколько времени занимает установка одной двери?',
    answer:
      'В среднем время установки одной двери от 1 до 3 часов. В зависимости от сложности проема, типа двери и дополнительных работ. Более точный срок Вам сможет озвучить мастер выехавший на объект перед началом работ.',
  },
  {
    question: 'На сколько важно подготовить проем к монтажу?',
    answer:
      'Очень важно. Каждое изделие имеет свои рекомендации по размерам проема. Эти рекомендации дает фабрика с учетом технических особенностей конструкции. Правильно подготовленный проем гарантия качественного монтажа и долгого использования изделия.',
  },
  {
    question: 'Чем вы лучше других?',
    answer:
      'Так как у нас за плечами многолетний опыт работы в премиум сегменте. Решение сложных и нестандартных задач а так же индивидуальный подход к каждому Клиенту.',
  },
  {
    question: 'Даете ли вы гарантию на работу?',
    answer: 'Гарантия на выполненные работы 3 года',
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
  const listRef = useRef<HTMLUListElement | null>(null);

  useLayoutEffect(() => {
    const root = listRef.current;
    if (!root) return;

    ensureGsapPlugins();
    const items = Array.from(root.querySelectorAll('li.faq-item')) as HTMLElement[];
    if (!items.length) return;

    // Start hidden to avoid flicker while ScrollTrigger sets up.
    gsap.set(items, { opacity: 0, y: 14 });

    const triggers = items.map((item, index) =>
      ScrollTrigger.create({
        trigger: item,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            delay: index * 0.03,
            overwrite: 'auto',
          });
        },
      })
    );

    // Reveal immediately if the section is already in view.
    requestAnimationFrame(() => {
      items.forEach((item) => {
        if (item.getBoundingClientRect().top < window.innerHeight * 0.88) {
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      });
      ScrollTrigger.refresh();
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

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
          <ul ref={listRef} className="lg:col-start-2 flex flex-col">
            {faqItems.map((item, index) => (
              <li
                key={index}
                className="faq-item border-b border-(--black)/10"
              >
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
