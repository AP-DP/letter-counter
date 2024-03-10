import styles from "./styles/page.module.css";
import UserInputArea from "./components/userInputArea";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by typing into the box below.
        </p>
      </div>

      <div className={styles.input}>
        <UserInputArea />
      </div>
    </main>
  );
}
