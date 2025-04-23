'use client';

import { useEffect } from 'react';
import i18n from './i18n'; // 👈 import your config
import { I18nextProvider } from 'react-i18next'; // Import the provider

export function I18nProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if (!i18n.isInitialized) {
            i18n.init(); // Explicitly initialize i18n if not already initialized
        }
    }, []);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}