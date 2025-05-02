// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import HttpBackend from 'i18next-http-backend';
// // import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//     .use(HttpBackend) // loads translations from /public/locales
//     // .use(LanguageDetector) // detects user language
//     .use(initReactI18next) // passes i18n instance to react-i18next
//     .init({
//         fallbackLng: 'en',
//         supportedLngs: ['en', 'es', 'fr'], // or match what's in your next.config.js
//         debug: process.env.NODE_ENV === 'development',
//         interpolation: {
//             escapeValue: false,
//         },
//         backend: {
//             loadPath: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/locales/{{lng}}/{{ns}}.json`,
//         },
//         react: {
//             useSuspense: false, // Disable suspense for smoother SSR
//         },
//     });

// export default i18n;

import i18next from 'i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
// import LocizeBackend from 'i18next-locize-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { fallbackLng, languages, defaultNS } from './settings'

const runsOnServerSide = typeof window === 'undefined'

i18next
    .use(initReactI18next)
    // .use(LanguageDetector)
    .use(resourcesToBackend((language, namespace) => {
        console.log(language, namespace)
        return import(`../../public/locales/${language}/${namespace}.json`)
        // return import(`../../public/locales/en/common.json`)
    }))
    // .use(runsOnServerSide ? LocizeBackend : resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`))) // locize backend could be used, but prefer to keep it in sync with server side
    .init({
        debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng: fallbackLng, // let detect the language on client side
        fallbackNS: defaultNS,
        defaultNS,
        detection: {
            order: ['path', 'htmlTag', 'cookie', 'navigator']
        },
        preload: runsOnServerSide ? languages : [],
        // backend: {
        //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
        // }
    })

export default i18next