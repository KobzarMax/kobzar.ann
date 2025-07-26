import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import PhotoPopup from '@/components/PhotoPopup';

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
      <body className="font-sans">
        <Header />
        {children}
        <PhotoPopup />
      </body>
    </html>
  );
}
