import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider as ChakraProvider } from '@/components/ui/provider';
import { Nav } from "@/app/[lng]/components/nav";
import { I18nProvider } from '@/lib/i18n/provider';
import { getT } from '@/lib/i18n/server';
import { languages } from '@/lib/i18n/settings';

// import { languages } from '../../i18n/settings'
// import { getT } from '../../i18n'

// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }))
// }

// export async function generateMetadata() {
//   const { t } = await getT('second-page')
//   return {
//     title: t('title')
//   }
// }

// export default async function Layout({ children }) {
//   return children
// }

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
  return (
    <html lang="en">
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
