import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import PhotoPopup from '@/components/PhotoPopup';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anna Kobzar',
  description:
    'Welcome to the official website of Anna Kobzar, a professional photo and fashion model. Explore her portfolio, latest projects, and get in touch for collaborations.',
  keywords: [
    'Anna Kobzar',
    'fashion model',
    'photo model',
    'modeling portfolio',
    'fashion photography',
    'model projects',
    'collaborations'
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <PhotoPopup />
      </body>
    </html>
  );
}
