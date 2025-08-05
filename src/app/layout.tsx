import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import QueryProvider from './QueryProvider';

export const metadata: Metadata = {
  title: 'Anna Kobzar Model',
  description:
    'Welcome to the official website of Anna Kobzar, a professional photo and fashion model. Explore her portfolio, latest projects, and get in touch for collaborations.',
  keywords: [
    'Anna Kobzar',
    'fashion model',
    'photo model',
    'london model',
    'uk model',
    'london',
    'modeling portfolio',
    'fashion photography',
    'model projects',
    'ukrainian model',
    'collaborations'
  ],
  verification: {
    google: 'PW43WjXI65rpxjTYnNJSxfhGIsCNoNn_5CTrw0H3LNs'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="en">
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.pnI va"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body className="font-sans">
          <Header />
          {children}
        </body>
      </html>
    </QueryProvider>
  );
}
