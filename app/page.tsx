import styles from "./page.module.css";
import { Heading, Text } from "@chakra-ui/react";
import { MotionBox } from './components/motion';
import { useTranslations } from 'next-intl';
import { IntroText } from './components/IntroText';
import { WeatherWidget } from "./components/WeatherWidget";

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.intro}>
          <MotionBox
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Heading size="2xl" className={styles.title} mb={4}>
              {t('greeting')}
            </Heading>
            <IntroText />
            <Text>{t('explore')}</Text>
          </MotionBox>
        </article>
        <article>
          <WeatherWidget />
        </article>
      </main>
    </div>
  );
}
