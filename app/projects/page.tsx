import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectImages } from '../data/projectImages';
import ButtonPrimary from '../components/ButtonPrimary';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FadingInImage from '../components/FadingInImage';

export const metadata = {
  title: 'Проекты | Нестандартные проекты',
  description:
    'Самые сложные и нестандартные проекты по монтажу межкомнатных дверей, реализованные нашей сервисной службой.',
};

export default function ProjectsPage() {
  return (
    <main className="bg-(--white) pt-16">
      <section className="section-base-padding flex flex-col justify-center bg-(--white) gap-8 lg:gap-16">
        <div className="flex flex-col gap-6 lg:gap-8 w-full max-w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8 w-full">
            <h1 className="h2 text-(--black)">Наши Проекты</h1>
            <span className="subtitle text-(--accent)">(Примеры Работ)</span>
          </div>
          <p className="p-medium max-w-[500px]">
            Для вашего удобства мы собрали здесь самые сложные и нестандартные
            проекты, успешно реализованные нашей сервисной службой. Это позволит
            вам лучше познакомиться с нашими возможностями и высоким уровнем
            профессионализма.
          </p>
          <ButtonPrimary isDark={true}>Связаться с нами</ButtonPrimary>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectImages.map((image, index) => (
            <div
              key={image.id}
              className="flex flex-col items-start justify-start gap-2"
            >
              <FadingInImage
                image={image.src}
                alt={image.id}
                className="aspect-[2/2.5] min-h-[200px] sm:min-h-[280px] w-full"
              />
              <span className="text-base uppercase font-medium">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
