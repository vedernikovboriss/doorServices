import React from 'react';
import Image from 'next/image';
import { ArrowUpRightIcon } from 'lucide-react';
import TextLink from './TextLink/TextLink';
import SaintPetersburgTime from './SaintPetersburgTime';

export default function Footer() {
  const navigation = [
    { label: 'Главная', href: '/' },
    { label: 'Услуги', href: '/services' },
    { label: 'Проекты', href: '/projects' },
    { label: 'Вакансии', href: '/vacancies' },
    { label: 'Образование', href: '/education' },
    { label: 'Контакты', href: '/contacts' },
  ];
  return (
    <footer className="section-base-padding text-background bg-(--gray) flex flex-col gap-12 lg:gap-48 pb-8! pt-24! relative isolate overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-8 rounded-b-lg bg-background z-3" />
      <div className="w-full h-full absolute top-0 left-0 z-0 pointer-events-none opacity-50 overflow-hidden">
        <Image src="/texture1.avif" alt="" fill className="object-cover" />
      </div>
      <div className="absolute z-0 top-0 left-0 w-full h-full overflow-hidden flex flex-col gap-4 justify-center opacity-10">
        <div className="w-2/3 h-full bg-(--white) border border-(--white)/20 rounded-xl rotate-y-15 -rotate-z-15" />
        <div className="w-2/3 h-full bg-[#898989] border border-(--white)/20 rounded-xl rotate-y-15 -rotate-z-15" />
        <div className="w-2/3 h-full bg-(--black) border border-(--white)/20 rounded-xl rotate-y-15 -rotate-z-15" />
        <div className="w-2/3 h-full bg-(--accent) border border-(--white)/20 rounded-xl rotate-y-15 -rotate-z-15" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24 relative z-2">
        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
          <p className="p-medium">
            Мы заботимся о качестве сервиса: точный замер, профессиональный
            монтаж, грамотная консультация и поддержка на всех этапах. Ваш
            комфорт — наш приоритет.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:col-start-2">
          <h3 className="subtitle">(Навигация)</h3>
          <ul className="flex flex-col gap-3 lg:gap-4 items-start">
            {navigation.map((item) => (
              <TextLink
                key={item.href}
                href={item.href}
                className="text-3xl! sm:text-4xl! lg:text-[2.6rem]! leading-none! font-medium! tracking-tight! normal-case!"
              >
                {item.label}
              </TextLink>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-8 lg:gap-16 justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="subtitle">(Ссылки)</h3>
            <div className="flex flex-col gap-2">
              <TextLink href="">
                {' '}
                YouTube
                <ArrowUpRightIcon className="w-4 h-4" />
              </TextLink>

              <TextLink href="">
                {' '}
                ВКонтакте
                <ArrowUpRightIcon className="w-4 h-4" />
              </TextLink>

              <TextLink href="">
                {' '}
                Телеграм
                <ArrowUpRightIcon className="w-4 h-4" />
              </TextLink>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="subtitle">(Информация)</span>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-regular">+7 (999) 999-99-99</span>
              <span className="text-sm font-regular">info@example.com</span>
              <span className="text-sm font-regular">
                Москва, ул. Ленина, 1
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-24 relative z-2 items-start">
        <div className="subtitle">
          <span className="block">© 2026 Технический отдел</span>
          <SaintPetersburgTime />
        </div>
        <div>
          <div className="flex flex-col items-start">
            <TextLink
              href="/privacyPolicy"
              className="flex items-center subtitle"
            >
              Политика конфиденциальности
              <ArrowUpRightIcon className="w-4 h-4" />
            </TextLink>

            <TextLink
              href="/termsOfService"
              className="flex items-center subtitle"
            >
              Условия использования
              <ArrowUpRightIcon className="w-4 h-4" />
            </TextLink>
          </div>
        </div>
        <div className="lg:justify-self-end">
          <span className="subtitle whitespace-nowrap flex items-center gap-1">
            Сайт от{' '}
            <TextLink href="/" className="underline flex items-center gap-1">
              БВ
              <ArrowUpRightIcon className="w-4 h-4" />
            </TextLink>
          </span>
        </div>
      </div>
    </footer>
  );
}
