import { Add } from "../comp/Add";
import { Add as AddComp } from "@mono/lib";

export default function Home() {
  return (
    <main>
      code in webapp: {<Add />}
      code from lib: {<AddComp />}
    </main>
  );
}
