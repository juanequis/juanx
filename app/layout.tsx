import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider as ChakraProvider } from '@/components/ui/provider';
import { Nav } from "./components/nav";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "J†'s Site",
  description: "J†'s personal site",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider>
          <ChakraProvider>
            <Nav />
            {children}
          </ChakraProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
