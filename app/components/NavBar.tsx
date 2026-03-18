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
    <header className="fixed w-full px-4 py-2 sm:px-5 lg:px-[2vw] bg-(--white) border-b border-(--black)/10 top-0 left-0 z-50 flex flex-wrap items-center justify-between gap-4">
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
        d="M58.305 0.000488281H3.02426H0V12.1892H3.02426H23.0467V50.9099V57.441V60.4639H26.0703H35.26H38.2829V57.441V50.9099V12.1892H58.305H61.3285V9.16626V3.02339V0.000488281H58.305Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84.3352 48.2753H127.835V60.4639H84.3352H80.371H69.0994V0.000488281H80.371H84.3352H127.835V12.1892H84.3352V23.7065H118.334V35.8952H84.3352V48.2753Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152.805 0.000488281L166.757 17.8586L180.71 0.000488281H200.044L176.425 30.2322L200.044 60.4639H180.71L166.758 42.6061L152.806 60.4639H133.471L157.09 30.2322L133.471 0.000488281H152.805Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M132.169 105.192H137.954H160.338V96.9192H137.954V92.2971H154.985V84.0244H137.954V79.4019H160.338V71.1289H137.954H127.248V79.4019V105.192H132.169Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.8218 79.4019H54.7438V105.192H65.4491V79.4019H77.3715V71.1289H42.8218V79.4019Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9519 98.1364C14.5993 98.1364 11.1929 94.73 11.1929 88.1616C11.1929 81.5911 14.5993 78.1857 19.9519 78.1857C25.3042 78.1857 28.7106 81.5911 28.7106 88.1616C28.7106 94.73 25.3042 98.1364 19.9519 98.1364ZM172.619 105.192C168.969 105.192 165.319 105.192 161.67 105.192C163.431 98.055 165.193 90.9182 166.955 83.7817C168.901 75.9954 173.767 71.1289 183.5 71.1289C189.015 71.1289 194.53 71.1289 200.045 71.1289C200.045 82.4832 200.045 93.8375 200.045 105.192H189.339V79.4019H183.5C180.337 79.4019 178.585 81.1044 177.904 83.7817L172.619 105.192ZM118.002 71.1289V96.9192H122.869C122.869 99.6769 122.869 102.434 122.869 105.192H78.102C78.102 102.434 78.102 99.6769 78.102 96.9192H82.4819L85.6442 83.7817C87.5419 75.9954 92.4567 71.1289 102.19 71.1289C107.461 71.1289 112.731 71.1289 118.002 71.1289H118.002ZM93.4301 96.9192H107.297V79.4019H102.19C99.0261 79.4019 97.2252 81.1044 96.5929 83.7817L93.4305 96.9192H93.4301ZM19.9519 70.1558C7.05708 70.1558 0.000244141 77.2126 0.000244141 88.1616C0.000244141 99.1098 7.05708 106.165 19.9519 106.165C32.8474 106.165 39.9029 99.1098 39.9029 88.1616C39.9029 77.2126 32.8474 70.1558 19.9519 70.1558Z"
        fill="black"
      />
      <path
        d="M289.964 0.000488281H335.3C336.607 0.000488281 337.729 0.496785 338.606 1.4634C339.482 2.42968 339.87 3.5959 339.744 4.89441C336.6 37.3058 333.459 69.7189 330.32 102.132C330.098 104.427 328.186 106.165 325.879 106.165C311.27 106.165 296.584 106.165 280.535 106.165C279.231 106.165 278.106 105.667 277.23 104.702C276.354 103.735 275.967 102.569 276.093 101.272C279.226 68.8558 282.372 36.4441 285.52 4.03273C285.743 1.73582 287.656 0.000488281 289.964 0.000488281Z"
        fill="#9D9E9E"
      />
      <path
        d="M351.844 0.000488281H397.181C398.487 0.000488281 399.61 0.496785 400.487 1.4634C401.363 2.42968 401.751 3.5959 401.625 4.89441C398.482 37.3058 395.34 69.7189 392.202 102.132C391.98 104.427 390.067 106.165 387.761 106.165C373.152 106.165 358.466 106.165 342.415 106.165C341.112 106.165 339.988 105.667 339.112 104.702C338.236 103.735 337.848 102.569 337.974 101.272C341.108 68.8558 344.256 36.4441 347.402 4.03273C347.625 1.73582 349.538 0.000488281 351.845 0.000488281L351.844 0.000488281Z"
        fill="black"
      />
      <path
        d="M413.722 0.000488281H459.06C460.364 0.000488281 461.487 0.496785 462.364 1.4634C463.24 2.42968 463.628 3.5959 463.502 4.89441C460.361 37.3058 457.216 69.7189 454.079 102.132C453.856 104.427 451.946 106.165 449.639 106.165C435.029 106.165 420.344 106.165 404.293 106.165C402.99 106.165 401.867 105.667 400.99 104.702C400.113 103.735 399.726 102.569 399.852 101.272C402.986 68.8558 406.134 36.4441 409.28 4.03273C409.503 1.73582 411.416 0.000488281 413.722 0.000488281L413.722 0.000488281Z"
        fill="#E31E24"
      />
      <path
        d="M228.146 0.000488281H273.399C274.703 0.000488281 275.825 0.496785 276.702 1.4634C277.58 2.42968 277.967 3.59591 277.841 4.89441C274.698 37.3058 271.557 69.7189 268.417 102.132C268.195 104.427 266.284 106.165 263.978 106.165C249.367 106.165 234.768 106.165 218.717 106.165C217.413 106.165 216.29 105.668 215.413 104.702C214.536 103.737 214.149 102.569 214.275 101.272C217.408 68.8558 220.555 36.4441 223.703 4.03273C223.926 1.73582 225.84 0.000488281 228.146 0.000488281Z"
        fill="#FEFEFE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M228.146 0.000341802H273.399C274.703 0.000341802 275.826 0.49698 276.703 1.46325C277.581 2.43021 277.967 3.59576 277.841 4.89461L268.418 102.132C268.195 104.427 266.284 106.165 263.977 106.165H218.717C217.413 106.165 216.29 105.668 215.413 104.701C214.536 103.736 214.149 102.569 214.275 101.272C217.408 68.855 220.555 36.444 223.703 4.03224C223.926 1.73567 225.84 0 228.146 0L228.146 0.000341802ZM273.399 2.23231H228.146C227.56 2.23231 227.031 2.44559 226.639 2.79833L226.643 2.80278C226.242 3.1668 225.973 3.67164 225.918 4.24176L221.198 52.86L216.489 101.481C216.456 101.826 216.486 102.139 216.578 102.414H216.586C216.678 102.692 216.837 102.957 217.06 103.201C217.288 103.453 217.538 103.638 217.802 103.755C218.067 103.873 218.374 103.933 218.717 103.933H263.977C264.559 103.933 265.087 103.718 265.478 103.362C265.878 102.998 266.148 102.493 266.203 101.923L275.626 4.68542C275.658 4.35456 275.625 4.04113 275.529 3.75162C275.439 3.47408 275.278 3.2085 275.055 2.96308C274.828 2.7122 274.578 2.5266 274.314 2.40936C274.048 2.29213 273.741 2.23197 273.399 2.23197L273.399 2.23231Z"
        fill="black"
      />
    </svg>
  );
}
