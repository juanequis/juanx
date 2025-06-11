import styles from "../page.module.css";
import localStyles from "./page.module.css";
import { Heading, Text, Button } from "@chakra-ui/react";
import { MotionBox } from '../_components/motion';
import { useTranslations } from 'next-intl';

export default function Work() {
  const t = useTranslations('work');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.intro}>
          <MotionBox
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Heading size="2xl" className={styles.title} mb={4}>
              {t('title')}
            </Heading>
            <Text mb={4}>{t('description')}</Text>
          </MotionBox>
        </article>
        <article>
          <a href="/cv.pdf" download target="_blank" className={localStyles.downloadLink} aria-labelledby="downloadCvButton">
            <Button id="downloadCvButton" variant="surface">
              {t('downloadCv', { defaultMessage: 'Download CV' })}
            </Button>
          </a>
        </article>
      </main>
    </div>
  );
}
