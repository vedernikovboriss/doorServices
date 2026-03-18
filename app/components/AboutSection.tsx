import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import FadingInImage from './FadingInImage';
import AnimatedText from './AnimatedText';
import AboutAttentionReveal from './AboutAttentionReveal';

export default function AboutSection() {
  const aboutItems = [
    'Правильно подготовавливаем габариты проёма.',
    'Учитываем стыки с разными видами напольных покрытий.',
    'Продумать расположение выключателей.',
    'Выполняем монтаж без потерь времени.',
  ];

  return (
    <section className="section-base-padding min-h-0 lg:min-h-screen bg-(--white) flex flex-col gap-8 lg:gap-16">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="subtitle text-(--accent)">
            //СЕКРЕТ НАШЕГО ВЫСОКОГО КАЧЕСТВА
          </span>
          <span className="subtitle text-(--accent)">(О НАС)</span>
        </div>
        <AnimatedText as="h2" className="h2">
          Более 25 лет профессионального монтажа межкомнатных дверей
        </AnimatedText>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="w-full flex flex-col items-start justify-center gap-6 lg:gap-8 h-full">
          <p className="p-medium">
            Мы понимаем, что правильная установка межкомнатных дверей — это не
            только результат работы, но и залог их долговечной и надежной
            эксплуатации. Наша команда профессионалов уделяет внимание каждой
            детали процесса — от тщательной подготовки проема и подбора
            качественной фурнитуры до аккуратного и продуманного монтажа с
            учетом всех технических нюансов.
          </p>
          <p className="p-small">
            За более чем 100 успешно реализованных проектов мы приобрели
            обширный опыт и глубокие знания во всех аспектах дверного монтажа.
            Наши мастера — эксперты своего дела с многолетней практикой, что
            позволяет нам браться за задачи любой сложности и гарантировать
            высокий стандарт качества.
          </p>
          <p className="p-small">
            Мы постоянно совершенствуем свои навыки, используем современные
            инструменты и материалы, чтобы каждая дверь радовала своим видом и
            долговечностью. Сотрудничая с нами, вы можете быть уверены, что все
            работы будут выполнены в срок, с учетом особенностей вашего
            интерьера и ваших индивидуальных пожеланий.
          </p>

          <ButtonPrimary isDark={true}>Заказать услугу</ButtonPrimary>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-6 lg:gap-8 h-full">
          <FadingInImage
            image="/projectsOptimized/pr2.avif"
            alt="Hero Section"
            className="aspect-[4/3] min-h-[200px] sm:min-h-[280px] w-full"
          />
          <AboutAttentionReveal items={aboutItems} />
        </div>
      </div>
    </section>
  );
}
