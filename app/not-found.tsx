import ButtonPrimary from './components/ButtonPrimary';

export const metadata = {
  title: '404 - Not Found',
};

export default function NotFound() {
  return (
    <main className="relative section-base-padding min-h-svh flex flex-col justify-center gap-8">
      <h1 className="h2">
        <span className="block">Страница</span>
        <span className="block">не найдена</span>
      </h1>
      <p className="p-medium">
        Упс! Такой страницы не существует. Похоже, вы ввели неверный адрес или
        страница была удалена. Пожалуйста, проверьте URL или вернитесь на
        главную страницу.
      </p>
      <ButtonPrimary isDark={true} to="/">
        На главную
      </ButtonPrimary>
      <div className="pointer-events-none absolute bottom-0 lg:bottom-auto right-0 w-[min(45vw,200px)] sm:w-[min(50vw,260px)] lg:w-auto opacity-65 lg:opacity-100 -mr-2 sm:-mr-4 lg:mr-0">
        <NotFoundSVG />
      </div>
    </main>
  );
}

function NotFoundSVG() {
  return (
    <svg
      className="w-full h-auto max-h-[320px] sm:max-h-[420px] lg:max-h-[600px]"
      width="400"
      height="600"
      viewBox="0 0 1768 2151"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2.18557e-08"
        y1="1911.5"
        x2="1768"
        y2="1911.5"
        stroke="var(--black)"
      />
      <line
        x1="2.18557e-08"
        y1="1672.5"
        x2="1768"
        y2="1672.5"
        stroke="var(--black)"
      />
      <line
        x1="2.18557e-08"
        y1="1433.5"
        x2="1768"
        y2="1433.5"
        stroke="var(--black)"
      />
      <line
        x1="2.18557e-08"
        y1="1194.5"
        x2="1768"
        y2="1194.5"
        stroke="var(--black)"
      />
      <line
        x1="2.18557e-08"
        y1="955.5"
        x2="1768"
        y2="955.5"
        stroke="var(--black)"
      />
      <line
        x1="2.18557e-08"
        y1="716.5"
        x2="1768"
        y2="716.5"
        stroke="var(--black)"
      />
      <line
        x1="2.18557e-08"
        y1="477.5"
        x2="1768"
        y2="477.5"
        stroke="var(--black)"
      />
      <line
        x1="2.18557e-08"
        y1="238.5"
        x2="1768"
        y2="238.5"
        stroke="var(--black)"
      />
      <line x1="265.5" y1="239" x2="265.5" y2="478" stroke="var(--black)" />
      <line x1="265.5" y1="717" x2="265.5" y2="956" stroke="var(--black)" />
      <line x1="265.5" y1="1195" x2="265.5" y2="1434" stroke="var(--black)" />
      <line x1="265.5" y1="1673" x2="265.5" y2="1912" stroke="var(--black)" />
      <line x1="884.5" y1="1434" x2="884.5" y2="1673" stroke="var(--black)" />
      <line x1="884.5" y1="1912" x2="884.5" y2="2151" stroke="var(--black)" />
      <line
        x1="884.5"
        y1="2.18557e-08"
        x2="884.5"
        y2="239"
        stroke="var(--black)"
      />
      <line x1="1503.5" y1="1673" x2="1503.5" y2="1912" stroke="var(--black)" />
      <line x1="1503.5" y1="1195" x2="1503.5" y2="1434" stroke="var(--black)" />
      <line x1="1503.5" y1="717" x2="1503.5" y2="956" stroke="var(--black)" />
      <line x1="1503.5" y1="239" x2="1503.5" y2="478" stroke="var(--black)" />
      <line x1="884.5" y1="956" x2="884.5" y2="1195" stroke="var(--black)" />
      <line x1="884.5" y1="478" x2="884.5" y2="717" stroke="var(--black)" />
      <line x1="884.5" y1="478" x2="884.5" y2="717" stroke="var(--black)" />
    </svg>
  );
}
