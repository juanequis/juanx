import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider as ChakraProvider } from '@/components/ui/provider';
import { Nav } from "./_components/nav";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JC's Site",
  description: "JC's personal site",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <Script id="Cookiebot" 
          src="https://consent.cookiebot.com/uc.js" 
          data-cbid="846030bd-6177-40d0-9a37-47be977a1ae6" 
          data-blockingmode="auto" type="text/javascript">
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9M7VTY6DJL"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9M7VTY6DJL');
          `}
        </Script>
      </head>
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
