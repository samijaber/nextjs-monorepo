import { Add } from "../comp/Add";
import styles from "./page.module.css";

export default function Home() {
  return <main className={styles.main}>{<Add />}</main>;
}
