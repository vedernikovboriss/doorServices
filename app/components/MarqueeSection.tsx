import { Star } from 'lucide-react';
import Image from 'next/image';

const text =
  'Надежные решения для нестандартных задач — межкомнатные двери под ваш проект';

export default function MarqueeSection() {
  return (
    <div className="relative w-full py-4 bg-(--accent) overflow-hidden flex flex-col gap-4">
      <Image
        className="absolute z-0 top-0 left-0 w-full h-full object-cover opacity-10"
        src="/texture1.avif"
        alt=""
        fill
      />
      <div className="flex justify-between items-center gap-4 px-4 sm:px-5 lg:px-[2vw]">
        <StarIcon className="relative z-10 w-10 h-10" />
        <div className="w-full h-px bg-(--white)/50" />
        <StarIcon className="relative z-10 w-10 h-10" />
      </div>
      <div
        className="relative z-10 flex w-max"
        style={{
          animation: 'marquee 60s linear infinite',
          willChange: 'transform',
        }}
      >
        <span className="shrink-0 whitespace-nowrap px-8 text-(--white) text-4xl font-bold uppercase md:text-5xl lg:text-6xl">
          {text}
        </span>
        <span
          className="shrink-0 whitespace-nowrap px-8 text-(--white) text-4xl font-bold uppercase md:text-5xl lg:text-6xl"
          aria-hidden
        >
          {text}
        </span>
      </div>
      <div className="flex justify-between items-center gap-4 px-4 sm:px-5 lg:px-[2vw]">
        <StarIcon className="relative z-10 w-10 h-10" />
        <div className="w-full h-px bg-(--white)/50" />
        <StarIcon className="relative z-10 w-10 h-10" />
      </div>
    </div>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 399 393"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M199.424 0L225.878 129.817L329.588 47.376L266.409 163.826L398.847 167.336L275.597 215.931L374.794 303.75L249.142 261.752L268.683 392.788L199.424 279.848L130.165 392.788L149.705 261.752L24.0534 303.75L123.251 215.931L1.52588e-05 167.336L132.438 163.826L69.2591 47.376L172.969 129.817L199.424 0Z"
        fill="var(--white)"
      />
    </svg>
  );
}
