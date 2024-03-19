import { Add } from "../comp/Add";
import styles from "./page.module.css";
import { Add as AddComp } from "@mono/lib";

export default function Home() {
  return (
    <main className={styles.main}>
      code in webapp: {<Add />}
      code from lib: {<AddComp />}
    </main>
  );
}
