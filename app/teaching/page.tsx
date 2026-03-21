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
            <div
              key={index}
              className="flex flex-col justify-between gap-8 lg:gap-16 p-6 sm:p-8 bg-white rounded-sm"
            >
              <h3 className="card-title">{benefit.title}</h3>
              <p className="p-small">{benefit.description}</p>
            </div>
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
              <div key={index} className="flex flex-col gap-2">
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
              </div>
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
            <div
              key={index}
              className="flex flex-col justify-between gap-8 sm:gap-16 lg:gap-32 p-6 sm:p-8 bg-white rounded-sm"
            >
              <h3 className="card-title">{item.title}</h3>
              <div className="flex flex-col gap-2">
                <span className="numbers-title">{item.salary}</span>
                <span className="p-small">тыс. ₽/мес</span>
              </div>
            </div>
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
          <div className="relative min-h-[200px] sm:min-h-[280px] lg:min-h-0 lg:row-span-2 lg:col-start-1 lg:row-start-1 rounded-sm overflow-hidden bg-(--accent)/10 flex items-center justify-center p-4">
            <DoorSVG2 />
          </div>
          {whyUs.map((item, index) => {
            const lgGrid = [
              'lg:col-start-2 lg:row-start-1',
              'lg:col-start-3 lg:row-start-1',
              'lg:col-start-2 lg:row-start-2',
              'lg:col-start-3 lg:row-start-2',
            ][index];
            return (
              <div
                key={index}
                className={`flex flex-col gap-8 lg:gap-16 justify-between p-6 sm:p-8 bg-white rounded-sm ${lgGrid}`}
              >
                <h3 className="card-title">{item.title}</h3>
                <p className="p-small">{item.description}</p>
              </div>
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

function DoorSVG2() {
  return (
    <svg
      className="w-full max-w-[min(100%,420px)] lg:max-w-full h-auto max-h-[280px] sm:max-h-[360px] lg:max-h-none"
      width="500"
      height="500"
      viewBox="0 0 1135 1832"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_271_187)">
        <path d="M989 0.390625L129 688.891V1765.89" stroke="var(--black)" />
        <path d="M1130.5 58.3906L270.5 746.891V1823.89" stroke="var(--black)" />
        <path
          d="M134 1204.89H216C226.77 1204.89 235.5 1213.62 235.5 1224.39V1459.39C235.5 1470.16 226.77 1478.89 216 1478.89H134C131.515 1478.89 129.5 1476.88 129.5 1474.39V1209.39C129.5 1206.91 131.515 1204.89 134 1204.89Z"
          stroke="var(--black)"
        />
        <path
          d="M4.5 1179.26C4.5 1164.42 20.4198 1155.02 33.416 1162.18L108.173 1203.4C109.608 1204.19 110.5 1205.7 110.5 1207.34V1470.68C110.5 1474.15 106.73 1476.32 103.73 1474.57L14.165 1422.25C8.17987 1418.75 4.50007 1412.34 4.5 1405.41V1179.26Z"
          stroke="var(--black)"
        />
        <rect
          x="111"
          y="1215.39"
          width="18"
          height="120"
          rx="9"
          fill="var(--black)"
        />
        <rect
          x="111"
          y="1349.39"
          width="18"
          height="120"
          rx="9"
          fill="var(--black)"
        />
        <path
          d="M22 1284.89C23.3766 1284.89 24.7457 1285.97 25.7998 1287.99C26.8412 1289.99 27.5 1292.78 27.5 1295.89C27.5 1299 26.8412 1301.79 25.7998 1303.79C24.7457 1305.81 23.3766 1306.89 22 1306.89C20.6234 1306.89 19.2543 1305.81 18.2002 1303.79C17.1588 1301.79 16.5 1299 16.5 1295.89C16.5 1292.78 17.1588 1289.99 18.2002 1287.99C19.2543 1285.97 20.6234 1284.89 22 1284.89Z"
          stroke="var(--black)"
        />
        <path
          d="M27 1181.89C28.3766 1181.89 29.7457 1182.97 30.7998 1184.99C31.8412 1186.99 32.5 1189.78 32.5 1192.89C32.5 1196 31.8412 1198.79 30.7998 1200.79C29.7457 1202.81 28.3766 1203.89 27 1203.89C25.6234 1203.89 24.2543 1202.81 23.2002 1200.79C22.1588 1198.79 21.5 1196 21.5 1192.89C21.5 1189.78 22.1588 1186.99 23.2002 1184.99C24.2543 1182.97 25.6234 1181.89 27 1181.89Z"
          stroke="var(--black)"
        />
        <path
          d="M27 1386.89C28.3766 1386.89 29.7457 1387.97 30.7998 1389.99C31.8412 1391.99 32.5 1394.78 32.5 1397.89C32.5 1401 31.8412 1403.79 30.7998 1405.79C29.7457 1407.81 28.3766 1408.89 27 1408.89C25.6234 1408.89 24.2543 1407.81 23.2002 1405.79C22.1588 1403.79 21.5 1401 21.5 1397.89C21.5 1394.78 22.1588 1391.99 23.2002 1389.99C24.2543 1387.97 25.6234 1386.89 27 1386.89Z"
          stroke="var(--black)"
        />
        <circle cx="191" cy="1449.39" r="14.5" stroke="var(--black)" />
        <circle cx="191" cy="1244.39" r="14.5" stroke="var(--black)" />
        <circle cx="206" cy="1342.39" r="14.5" stroke="var(--black)" />
      </g>
      <defs>
        <filter
          id="filter0_d_271_187"
          x="0"
          y="0"
          width="1134.81"
          height="1831.89"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_271_187"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_271_187"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
