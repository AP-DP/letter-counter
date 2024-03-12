import styles from "./styles/page.module.css";
import UserInputArea from "./components/userInputArea";
import GridDisplay from "./components/gridDisplay";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by typing into the box below.
        </p>
      </div>

      <div id="counterContainer" className={styles.input}>
        <UserInputArea />
        <GridDisplay />
      </div>
    </main>
  );
}
