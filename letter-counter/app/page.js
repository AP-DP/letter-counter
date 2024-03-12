import styles from "./styles/page.module.css";
import InputDisplayWrapper from "./components/inputDisplayWrapper";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by typing into the box below.
        </p>
      </div>

      <div id="counterContainer" className={styles.input}>
        <InputDisplayWrapper />
      </div>
    </main>
  );
}
