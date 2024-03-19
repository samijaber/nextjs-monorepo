import { Add } from "../comp/Add";
import { Comp } from "@mono/lib";

export default function Home() {
  return (
    <main>
      code in webapp: {<Add />}
      code from lib: {<Comp />}
    </main>
  );
}
