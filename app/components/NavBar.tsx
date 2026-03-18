'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import TextLink from './TextLink/TextLink';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { useTransitionRouter } from 'next-view-transitions';
import { Link } from 'next-view-transitions';

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги', href: '/services' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Вакансии', href: '/vacancies' },
  { label: 'Обучение', href: '/education' },
  { label: 'Связаться', href: '/contacts', icon: true },
];

export default function NavBar() {
  const router = useTransitionRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();
  const lenisRef = useRef(lenis);
  useEffect(() => {
    lenisRef.current = lenis;
  }, [lenis]);

  const pathname = usePathname();
  const isHome = pathname === '/';

  const scrollToTop = useCallback(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const instance = lenisRef.current;
        if (instance) {
          instance.scrollTo(0, { immediate: false });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      scrollToTop();
    } else {
      router.push(`/`);
    }
  };

  return (
    <header className="view-transition-nav fixed w-full px-4 py-2 sm:px-5 lg:px-[2vw] bg-(--white) border-b border-(--black)/10 top-0 left-0 z-50 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
        <div
          className="text-md font-medium uppercase cursor-pointer shrink-0"
          onClick={handleLogoClick}
        >
          <LogoSVG />
        </div>
        <span className="subtitle opacity-50 hidden sm:inline truncate">
          +7 (999) 999-99-99
        </span>
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <TextLink href="/">Главная</TextLink>
        <TextLink href="/services">Услуги</TextLink>
        <TextLink href="/projects">Проекты</TextLink>
        <TextLink href="/vacancies">Вакансии</TextLink>
        <TextLink href="/education">Обучение</TextLink>
        <TextLink href="/contacts">
          Связаться
          <ArrowUpRight className="w-5 h-5" />
        </TextLink>
      </div>
      <button
        type="button"
        onClick={() => setMenuOpen((o) => !o)}
        className="lg:hidden p-2 -mr-2 rounded-sm hover:bg-(--black)/5 transition-colors"
        aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {menuOpen && (
        <div className="w-full lg:hidden flex flex-col gap-2 py-4 border-t border-(--black)/10">
          {navLinks.map(({ label, href, icon }) => (
            <a
              key={href}
              onClick={() => {
                setMenuOpen(false);
                router.push(href);
              }}
              className="flex items-center gap-2 py-2 text-base font-medium uppercase hover:text-(--accent) transition-colors"
            >
              {label}
              {icon && <ArrowUpRight className="w-4 h-4" />}
            </a>
          ))}
          <span className="subtitle opacity-50 pt-2 sm:hidden">
            +7 (999) 999-99-99
          </span>
        </div>
      )}
    </header>
  );
}

export function LogoSVG() {
  return (
    <svg
      width="160"
      height="45"
      viewBox="0 0 464 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58.3181 0H3.02362H0V12.1701H3.02362H23.0551V50.9102V57.411V60.4346H26.0787H35.263H38.2866V57.411V50.9102V12.1701H58.3181H61.3417V9.14646V3.02362V0H58.3181Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84.3212 48.2646H127.824V60.4346H84.3212H80.3527H69.0897V0H80.3527H84.3212H127.824V12.1701H84.3212V23.6976H118.337V35.8677H84.3212V48.2646Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152.806 0L166.753 17.8394L180.699 0H200.05L176.428 30.1984L200.05 60.4346H180.699L166.753 42.5953L152.806 60.4346H133.455L157.077 30.1984L133.455 0H152.806Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M132.17 105.184H137.953H160.328V96.9069H137.953V92.2959H154.998V84.0188H137.953V79.3699H160.328V71.0928H137.953H127.257V79.3699V105.184H132.17Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.822 79.3699H54.7275V105.184H65.4614V79.3699H77.3669V71.0928H42.822V79.3699Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9559 98.1169C14.589 98.1169 11.1874 94.7154 11.1874 88.139C11.1874 81.5626 14.589 78.161 19.9559 78.161C25.285 78.161 28.7244 81.5626 28.7244 88.139C28.7244 94.7154 25.285 98.1169 19.9559 98.1169ZM172.611 105.185C168.983 105.185 165.317 105.185 161.65 105.185C163.427 98.0414 165.203 90.898 166.942 83.7547C168.907 75.9689 173.783 71.0933 183.496 71.0933C189.014 71.0933 194.532 71.0933 200.05 71.0933C200.05 82.4697 200.05 93.8083 200.05 105.185H189.354V79.3705H183.496C180.321 79.3705 178.583 81.0713 177.902 83.7547L172.611 105.185ZM117.997 71.0933V96.9075H122.872C122.872 99.6665 122.872 102.426 122.872 105.185H78.085C78.085 102.426 78.085 99.6665 78.085 96.9075H82.4693L85.6441 83.7547C87.5339 75.9689 92.4472 71.0933 102.198 71.0933C107.452 71.0933 112.743 71.0933 117.997 71.0933ZM93.4299 96.9075H107.301V79.3705H102.198C99.0236 79.3705 97.2094 81.0713 96.6047 83.7547L93.4299 96.9075ZM19.9559 70.1484C7.06772 70.1484 0 77.1784 0 88.139C0 99.0996 7.06772 106.13 19.9559 106.13C32.8441 106.13 39.9118 99.0996 39.9118 88.139C39.9118 77.1784 32.8441 70.1484 19.9559 70.1484Z"
        fill="black"
      />
      <path
        d="M289.965 0H335.282C336.605 0 337.739 0.491339 338.608 1.43622C339.477 2.4189 339.855 3.59055 339.742 4.87559C336.605 37.3039 333.468 69.6945 330.331 102.123C330.104 104.391 328.176 106.129 325.871 106.129C311.282 106.129 296.579 106.129 280.517 106.129C279.231 106.129 278.098 105.638 277.228 104.693C276.359 103.71 275.981 102.539 276.094 101.254C279.231 68.8252 282.368 36.4346 285.505 4.0063C285.732 1.70079 287.66 0 289.965 0Z"
        fill="#999999"
      />
      <path
        d="M351.836 0H397.191C398.476 0 399.61 0.491339 400.479 1.43622C401.348 2.4189 401.764 3.59055 401.613 4.87559C398.476 37.3039 395.339 69.6945 392.202 102.123C391.975 104.391 390.047 106.129 387.742 106.129C373.153 106.129 358.45 106.129 342.425 106.129C341.102 106.129 339.969 105.638 339.099 104.693C338.23 103.71 337.852 102.539 337.965 101.254C341.102 68.8252 344.239 36.4346 347.414 4.0063C347.603 1.70079 349.531 0 351.836 0Z"
        fill="black"
      />
      <path
        d="M413.707 0H459.061C460.347 0 461.48 0.491339 462.35 1.43622C463.257 2.4189 463.635 3.59055 463.484 4.87559C460.347 37.3039 457.21 69.6945 454.072 102.123C453.846 104.391 451.956 106.129 449.65 106.129C435.024 106.129 420.359 106.129 404.296 106.129C402.973 106.129 401.877 105.638 400.97 104.693C400.101 103.71 399.723 102.539 399.836 101.254C402.973 68.8252 406.148 36.4346 409.285 4.0063C409.512 1.70079 411.402 0 413.707 0Z"
        fill="#E30000"
      />
      <path
        d="M228.132 0H273.411C274.696 0 275.83 0.491339 276.699 1.43622C277.569 2.4189 277.946 3.59055 277.833 4.87559C274.696 37.3039 271.559 69.6945 268.422 102.123C268.195 104.391 266.268 106.129 263.962 106.129C249.373 106.129 234.784 106.129 218.721 106.129C217.398 106.129 216.302 105.638 215.395 104.693C214.526 103.71 214.148 102.539 214.261 101.254C217.398 68.8252 220.535 36.4346 223.71 4.0063C223.937 1.70079 225.827 0 228.132 0Z"
        fill="#FEFEFE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M228.132 0H273.411C274.696 0 275.83 0.491339 276.699 1.43622C277.569 2.4189 277.946 3.59055 277.833 4.87559L268.422 102.123C268.195 104.428 266.268 106.129 263.962 106.129H218.721C217.398 106.129 216.302 105.638 215.395 104.693C214.526 103.71 214.148 102.539 214.261 101.254C217.398 68.8252 220.535 36.4346 223.71 4.0063C223.937 1.70079 225.827 0 228.132 0ZM273.411 2.22992H228.132C227.565 2.22992 227.036 2.4189 226.621 2.79685H226.658C226.243 3.13701 225.978 3.66614 225.902 4.23307L221.178 52.8378L216.491 101.48C216.454 101.82 216.491 102.123 216.567 102.387C216.68 102.69 216.832 102.954 217.058 103.181C217.285 103.446 217.55 103.635 217.814 103.748C218.079 103.861 218.381 103.899 218.721 103.899H263.962C264.567 103.899 265.096 103.71 265.474 103.332C265.89 102.992 266.154 102.463 266.192 101.896L275.641 4.64882C275.641 4.34646 275.641 4.0063 275.528 3.74173C275.452 3.43937 275.263 3.1748 275.036 2.94803C274.809 2.68346 274.583 2.49449 274.318 2.3811C274.054 2.26772 273.751 2.22992 273.411 2.22992Z"
        fill="black"
      />
      <path
        d="M235.504 51.9307H226.469C225.405 51.9307 224.542 52.4303 224.542 53.0466C224.542 53.6629 225.405 54.1625 226.469 54.1625H235.504C236.569 54.1625 237.432 53.6629 237.432 53.0466C237.432 52.4303 236.569 51.9307 235.504 51.9307Z"
        fill="black"
      />
    </svg>
  );
}
