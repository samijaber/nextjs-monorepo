import styles from "./page.module.css";
import { add3 } from "@/lib/add";

export default function Home() {
  const k = add3();
  return <main className={styles.main}>1+2={k}</main>;
}
