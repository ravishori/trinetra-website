import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { siteMetadata, siteName, siteUrl } from '@/lib/metadata';

import './globals.css';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  applicationName: siteName,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
