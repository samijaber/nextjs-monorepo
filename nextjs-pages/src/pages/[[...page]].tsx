import { Add } from "../comp/Add";
import { Comp } from "@mono/lib";

// do not prerender
export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default function Home() {
  return (
    <main>
      code in webapp: {<Add />}
      code from lib: {<Comp />}
    </main>
  );
}
