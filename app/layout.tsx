import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider as ChakraProvider } from '@/components/ui/provider';
import { Nav } from "./components/nav";
import { I18nProvider } from '@/lib/i18n/provider';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { locales } from '@/lib/i18n/settings'


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

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string },
}>) {

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <I18nProvider>
          <ChakraProvider>
            <Nav />
            {children}
          </ChakraProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
