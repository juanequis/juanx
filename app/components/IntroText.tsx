"use client";

import { Text } from "@chakra-ui/react";
import { useTranslations } from 'next-intl';
import styles from "../page.module.css";

export function IntroText() {
  const t = useTranslations('home');

  return (
    <Text className={styles.description} mb={4}>
      {t.rich('intro', {
        strong: (chunks) => <strong>{chunks}</strong>,
      })}
    </Text>
  );
}