import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
// @ts-ignore: Importing global CSS without type declarations
import '@/app/globals.css';
import LenisProvider from './components/LenisProvider';
import NavBar from './components/NavBar';
import ScrollProgressBar from './components/ScrollProgressBar';
import ScrollToTop from './components/ScrollToTop';
import { ViewTransitions } from 'next-view-transitions';
import { DisableScrollRestoration } from './components/DisableScrollPosition';

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Монтаж межкомнатных дверей',
    template: '%s | Монтаж межкомнатных дверей',
  },
  description:
    'Монтаж межкомнатных дверей на высоком уровне. Опыт мастеров более 25 лет, точные замеры, профессиональная установка и поддержка на всех этапах.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Монтаж межкомнатных дверей',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="ru">
        <body className={`${notoSans.variable} antialiased relative`}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            history.scrollRestoration = 'manual';
            window.scrollTo(0, 0);
          `,
            }}
          />
          <NavBar />
          <ScrollProgressBar />

          <LenisProvider>
            <DisableScrollRestoration />
            <ScrollToTop />

            {children}
          </LenisProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
