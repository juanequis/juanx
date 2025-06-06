import styles from "./page.module.css";
import { WebVitals } from './components/web-vitals'
import { WeatherWidget } from './components/weather-widget';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <WeatherWidget />
        <WebVitals />
      </main>
    </div>
  );
}
