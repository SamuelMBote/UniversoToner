import Header from '@/components/header-footer/Header';
import './globals.scss';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import Footer from '@/components/header-footer/Footer';
import BreadCrumbs from '@/components/header-footer/BreadCrumbs';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Universo Toner',
  description: 'Sua impressão com qualidade',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <BreadCrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}

