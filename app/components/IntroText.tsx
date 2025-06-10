"use client";

import { Text } from "@chakra-ui/react";
import { useTranslations } from 'next-intl';
import styles from "../page.module.css";

/**
 * Extracted this component from page.tsx to use it as client component in order to use 
 * `useTranslations` hook.
 */
export function IntroText() {
  const t = useTranslations('home');

  console.log(`${t}`);

  return (
    <Text className={styles.description} mb={4}>
      {t.rich('intro', {
        strong: (chunks) => <strong>{chunks}</strong>,
      })}
    </Text>
  );
}