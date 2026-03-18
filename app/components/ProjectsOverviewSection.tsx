import React from 'react';
import Link from 'next/link';
import ButtonPrimary from './ButtonPrimary';
import { projectImages } from '../data/projectImages';
import Image from 'next/image';
import FadingInImage from './FadingInImage';
import AnimatedText from './AnimatedText';

export default function ProjectsOverviewSection() {
  return (
    <section className="section-base-padding bg-(--white) flex flex-col items-center gap-8 lg:gap-16">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8 w-full">
        <h2 className="h2">
          <AnimatedText as="span" className="block">
            Недавние
          </AnimatedText>
          <AnimatedText as="span" className="block">
            Проекты
          </AnimatedText>
        </h2>
        <span className="subtitle text-(--accent)">(Наши Работы)</span>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8 w-full">
        <span className="h2">(06)</span>
        <AnimatedText as="p" className="p-medium">
          Для вашего удобства мы собрали здесь самые сложные и нестандартные
          проекты, успешно реализованные нашей сервисной службой. Это позволит
          вам лучше познакомиться с нашими возможностями и высоким уровнем
          профессионализма.
        </AnimatedText>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectImages
          .map((image, index) => (
            <div
              key={image.id}
              className="flex flex-col items-start justify-start gap-1"
            >
              <FadingInImage
                image={image.src}
                alt={image.id}
                className="aspect-2/2.5 min-h-[200px] sm:min-h-[280px] w-full"
              />
              <span className="text-base uppercase font-medium">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))
          .slice(0, 6)}
      </div>

      <ButtonPrimary isDark={true} to="/projects">
        Больше проектов
      </ButtonPrimary>
    </section>
  );
}
