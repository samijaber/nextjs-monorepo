import { Add } from "../comp/Add";
import styles from "./page.module.css";
import { Comp } from "@samijaber/isolated-vm-test";

export default function Home() {
  return (
    <main className={styles.main}>
      code in webapp: {<Add />}
      code from lib: {<Comp />}
    </main>
  );
}
