import React from 'react';
import Footer from '../components/Footer';
import ButtonPrimary from '../components/ButtonPrimary';
import AnimatedText from '../components/AnimatedText';

import {
  Users,
  TrendingUp,
  Briefcase,
  Lightbulb,
  Wrench,
  BookOpen,
  Package,
  DoorOpen,
} from 'lucide-react';
import {
  benefits,
  whatYouWillLearn,
  howMuchCanYouEarn,
  whyUs,
} from '../data/educationInfo';
import CTA from '../components/CTA';
import FadeInOnScroll from '../components/FadeInOnScroll';

export const metadata = {
  title: 'Обучение | Монтаж межкомнатных дверей',
  description:
    'Школа монтажа межкомнатных дверей: обучение навыкам, теория и практика. Помогаем освоить профессию установщика и начать зарабатывать.',
};

const whatYouWillLearnIcons = [
  Users, // Знакомство с мастерами
  TrendingUp, // Ситуация на рынке
  Briefcase, // Опыт и заказы
  Lightbulb, // Почему одни достигают успеха
  Wrench, // Обзор инструмента
  BookOpen, // Теория по установке
  Package, // Виды фурнитуры
  DoorOpen, // Типы дверей и погонаж
];

const page = () => {
  return (
    <main className="bg-(--white)">
      <section className="relative section-base-padding bg-(--white) flex flex-col justify-center gap-6 sm:gap-8 overflow-hidden lg:overflow-visible min-h-svh">
        <div className="relative z-10 flex flex-col gap-2 max-w-full  pr-0">
          <span className="subtitle text-(--accent)">(Получение навыков)</span>
          <h1 className="h2 text-(--black)">Обучение</h1>
        </div>

        <h2 className="h3 relative z-10 max-w-full lg:max-w-[min(100%,52rem)]">
          Хочешь освоить достойную профессию установщика межкомнатных дверей?
        </h2>

        <p className="p-medium relative z-10l">
          Запишитесь на обучение. Мы научим вас устанавливать двери быстро и
          качественно, чтобы вы могли начать зарабатывать уже через несколько
          дней.
        </p>
        <div className="relative z-10">
          <ButtonPrimary isDark={true}>Записаться</ButtonPrimary>
        </div>

        <div className="pointer-events-none absolute bottom-0 lg:bottom-auto right-0 w-[min(45vw,200px)] sm:w-[min(50vw,260px)] lg:w-auto opacity-65 lg:opacity-100 -mr-2 sm:-mr-4 lg:mr-0">
          <DoorSVG />
        </div>
      </section>

      <section className="section-base-padding bg-(--white) flex flex-col gap-8 lg:gap-16">
        <AnimatedText as="h2" className="h3">
          Что делает установку дверей выгодным и простым стартом?
        </AnimatedText>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <FadeInOnScroll
              key={index}
              delay={index * 0.05}
              className="flex flex-col justify-between gap-8 lg:gap-32 p-6 sm:p-8 bg-white rounded-sm"
            >
              <h3 className="card-title">{benefit.title} </h3>
              <p className="p-small">{benefit.description}</p>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      <CTA />

      <section className="section-base-padding flex flex-col gap-8 lg:gap-16">
        <div className="flex flex-col gap-4">
          <AnimatedText as="h2" className="h3">
            Что вы узнаете за период обучения
          </AnimatedText>
          <AnimatedText as="p" className="p-medium">
            За период обучения вы узнаете все, что нужно для начала работы в
            качестве установщика дверей.
          </AnimatedText>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {whatYouWillLearn.map((item, index) => {
            const Icon = whatYouWillLearnIcons[index];
            return (
              <FadeInOnScroll
                key={index}
                delay={index * 0.04}
                className="flex flex-col gap-2"
              >
                <div className="w-12 h-12 bg-(--accent) rounded-sm flex items-center justify-center shrink-0">
                  {Icon && (
                    <Icon
                      className="h-5 w-5 text-(--white)"
                      strokeWidth={1.5}
                    />
                  )}
                </div>
                <span className="h4">{item.title}</span>
                <p className="p-small">{item.description}</p>
              </FadeInOnScroll>
            );
          })}
        </div>
        <div className="flex justify-center">
          <ButtonPrimary isDark={true}>Записаться</ButtonPrimary>
        </div>
      </section>

      <section className="section-base-padding flex flex-col gap-8 lg:gap-16">
        <div className="flex flex-col gap-4">
          <AnimatedText as="h2" className="h3">
            Сколько зарабатывают установщики дверей?{' '}
          </AnimatedText>
          <AnimatedText as="p" className="p-medium">
            Сколько можно зарабатывать, освоив профессию
          </AnimatedText>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {howMuchCanYouEarn.map((item, index) => (
            <FadeInOnScroll
              key={index}
              delay={index * 0.05}
              className="flex flex-col justify-between gap-8 sm:gap-16 lg:gap-32 p-6 sm:p-8 bg-white rounded-sm"
            >
              <h3 className="card-title">{item.title}</h3>
              <div className="flex flex-col gap-4">
                <span className="numbers-title">{item.salary}</span>
                <span className="p-small text-(--accent) font-semibold!">
                  тыс. ₽/мес
                </span>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>
      <section className="section-base-padding flex flex-col gap-8 lg:gap-16 items-center w-full">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
          <AnimatedText className="h2">Почему Мы?</AnimatedText>
          <div className="flex flex-col gap-6 lg:gap-8 w-full lg:max-w-xl">
            <AnimatedText as="p" className="p-medium">
              Мы не просто преподаём теорию — обучаем исключительно тому, что
              действительно пригодится при выполнении реальных заказов. Наш путь
              — от самостоятельной работы мастером до создания собственной
              команды и бренда — позволяет делиться только проверенными,
              практическими знаниями, которые приносят результат.
            </AnimatedText>
            <ButtonPrimary isDark={true}>Записаться</ButtonPrimary>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          <div className="relative min-h-[180px] xs:min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-0 lg:row-span-2 lg:col-start-1 lg:row-start-1 rounded-sm overflow-hidden bg-(--gray) flex items-center justify-center p-2 xs:p-3 sm:p-4">
            <DoorSVG2
              className="
                w-[70%] xs:w-[65%] sm:w-[60%] md:w-[75%] lg:w-full
                max-w-[250px] xs:max-w-[320px] md:max-w-[400px] lg:max-w-full
                h-auto
                mx-auto
                block
              "
            />
          </div>
          {whyUs.map((item, index) => {
            const lgGrid = [
              'lg:col-start-2 lg:row-start-1',
              'lg:col-start-3 lg:row-start-1',
              'lg:col-start-2 lg:row-start-2',
              'lg:col-start-3 lg:row-start-2',
            ][index];
            return (
              <FadeInOnScroll
                key={index}
                delay={index * 0.05}
                className={`flex flex-col gap-8 lg:gap-16 justify-between p-6 sm:p-8 bg-white rounded-sm ${lgGrid}`}
              >
                <h3 className="card-title">{item.title}</h3>
                <p className="p-small">{item.description}</p>
              </FadeInOnScroll>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default page;

function DoorSVG() {
  return (
    <svg
      className="w-full h-auto max-h-[320px] sm:max-h-[420px] lg:max-h-[600px]"
      width="400"
      height="600"
      viewBox="0 0 544 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="4.37114e-08"
        y1="719.5"
        x2="544"
        y2="719.5"
        stroke="var(--black)"
      />
      <line
        x1="4.37114e-08"
        y1="79.5"
        x2="544"
        y2="79.5"
        stroke="var(--black)"
      />
      <line
        x1="79.5"
        y1="800"
        x2="79.5"
        y2="2.18556e-08"
        stroke="var(--black)"
      />
      <line
        x1="463.5"
        y1="800"
        x2="463.5"
        y2="2.18556e-08"
        stroke="var(--black)"
      />
      <circle cx="412" cy="414" r="9.5" stroke="var(--black)" />
      <rect
        x="359.5"
        y="376.5"
        width="64"
        height="14"
        rx="7"
        stroke="var(--black)"
      />
      <path
        d="M99.6464 759.646C99.4512 759.842 99.4512 760.158 99.6464 760.354L102.828 763.536C103.024 763.731 103.34 763.731 103.536 763.536C103.731 763.34 103.731 763.024 103.536 762.828L100.707 760L103.536 757.172C103.731 756.976 103.731 756.66 103.536 756.464C103.34 756.269 103.024 756.269 102.828 756.464L99.6464 759.646ZM444.354 760.354C444.549 760.158 444.549 759.842 444.354 759.646L441.172 756.464C440.976 756.269 440.66 756.269 440.464 756.464C440.269 756.66 440.269 756.976 440.464 757.172L443.293 760L440.464 762.828C440.269 763.024 440.269 763.34 440.464 763.536C440.66 763.731 440.976 763.731 441.172 763.536L444.354 760.354ZM100 760V760.5H444V760V759.5H100V760Z"
        fill="var(--black)"
      />
      <path
        d="M503.646 700.354C503.842 700.549 504.158 700.549 504.354 700.354L507.536 697.172C507.731 696.976 507.731 696.66 507.536 696.464C507.34 696.269 507.024 696.269 506.828 696.464L504 699.293L501.172 696.464C500.976 696.269 500.66 696.269 500.464 696.464C500.269 696.66 500.269 696.976 500.464 697.172L503.646 700.354ZM504.354 99.6464C504.158 99.4512 503.842 99.4512 503.646 99.6464L500.464 102.828C500.269 103.024 500.269 103.34 500.464 103.536C500.66 103.731 500.976 103.731 501.172 103.536L504 100.707L506.828 103.536C507.024 103.731 507.34 103.731 507.536 103.536C507.731 103.34 507.731 103.024 507.536 102.828L504.354 99.6464ZM504 700L504.5 700L504.5 100L504 100L503.5 100L503.5 700L504 700Z"
        fill="var(--black)"
      />
    </svg>
  );
}

function DoorSVG2({ className }: { className?: string }) {
  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 541 1380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M386 0.787109L1 302.287V1379.29"
        stroke="var(--white)"
        strokeWidth="2"
      />
      <path
        d="M540 0.787109L155 302.287V1379.29"
        stroke="var(--white)"
        strokeWidth="2"
      />
      <path
        d="M151 809.787H69C58.5066 809.787 50 818.294 50 828.787V1063.79C50 1074.28 58.5066 1082.79 69 1082.79H151C153.209 1082.79 155 1081 155 1078.79V813.787C155 811.578 153.209 809.787 151 809.787Z"
        stroke="var(--white)"
        strokeWidth="2"
      />
      <path
        d="M280 783.654C280 769.194 264.488 760.033 251.825 767.016L177.068 808.237C175.792 808.941 175 810.283 175 811.74V1075.08C175 1078.16 178.351 1080.09 181.018 1078.53L270.583 1026.21C276.415 1022.81 280 1016.56 280 1009.81V783.654Z"
        stroke="var(--white)"
        strokeWidth="2"
      />
      <rect
        width="18"
        height="120"
        rx="9"
        transform="matrix(-1 0 0 1 174 819.787)"
        fill="var(--white)"
      />
      <rect
        width="18"
        height="120"
        rx="9"
        transform="matrix(-1 0 0 1 174 953.787)"
        fill="var(--white)"
      />
      <path
        d="M263 889.787C261.904 889.787 260.666 890.658 259.644 892.618C258.646 894.529 258 897.239 258 900.287C258 903.335 258.646 906.045 259.644 907.956C260.666 909.916 261.904 910.787 263 910.787C264.096 910.787 265.334 909.916 266.356 907.956C267.354 906.045 268 903.335 268 900.287C268 897.239 267.354 894.529 266.356 892.618C265.334 890.658 264.096 889.787 263 889.787Z"
        stroke="var(--white)"
        strokeWidth="2"
      />
      <path
        d="M258 786.787C256.904 786.787 255.666 787.658 254.644 789.618C253.646 791.529 253 794.239 253 797.287C253 800.335 253.646 803.045 254.644 804.956C255.666 806.916 256.904 807.787 258 807.787C259.096 807.787 260.334 806.916 261.356 804.956C262.354 803.045 263 800.335 263 797.287C263 794.239 262.354 791.529 261.356 789.618C260.334 787.658 259.096 786.787 258 786.787Z"
        stroke="var(--white)"
        strokeWidth="2"
      />
      <path
        d="M258 991.787C256.904 991.787 255.666 992.658 254.644 994.618C253.646 996.529 253 999.239 253 1002.29C253 1005.33 253.646 1008.04 254.644 1009.96C255.666 1011.92 256.904 1012.79 258 1012.79C259.096 1012.79 260.334 1011.92 261.356 1009.96C262.354 1008.04 263 1005.33 263 1002.29C263 999.239 262.354 996.529 261.356 994.618C260.334 992.658 259.096 991.787 258 991.787Z"
        stroke="var(--white)"
        strokeWidth="2"
      />
      <circle
        cx="15"
        cy="15"
        r="14"
        transform="matrix(-1 0 0 1 109 1038.79)"
        stroke="var(--white)"
        strokeWidth="2"
      />
      <circle
        cx="15"
        cy="15"
        r="14"
        transform="matrix(-1 0 0 1 109 833.787)"
        stroke="var(--white)"
        strokeWidth="2"
      />
      <circle
        cx="15"
        cy="15"
        r="14"
        transform="matrix(-1 0 0 1 94 931.787)"
        stroke="var(--white)"
        strokeWidth="2"
      />
      <line
        x1="2"
        y1="301.787"
        x2="155"
        y2="301.787"
        stroke="var(--white)"
        strokeWidth="2"
      />
    </svg>
  );
}
