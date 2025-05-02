import styles from "@/app/[lng]/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>
            SAPEEEE <code>app/page.tsx</code>.
          </li>
          <li>
            <Link href="/"> Return <code> to index!</code>←</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
