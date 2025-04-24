import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpBackend) // loads translations from /public/locales
    // .use(LanguageDetector) // detects user language
    .use(initReactI18next) // passes i18n instance to react-i18next
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'es', 'fr'], // or match what's in your next.config.js
        debug: process.env.NODE_ENV === 'development',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/locales/{{lng}}/{{ns}}.json`,
        },
        react: {
            useSuspense: false, // Disable suspense for smoother SSR
        },
    });

export default i18n;