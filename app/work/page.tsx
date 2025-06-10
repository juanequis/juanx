import styles from "@/app/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>
            <Link href="/"> Return <code> to index!</code>←</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
