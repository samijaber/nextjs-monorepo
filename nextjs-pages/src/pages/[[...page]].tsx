import { Comp } from "@mono/lib";
import ivm from "isolated-vm";
const isolate = new ivm.Isolate({ memoryLimit: 128 });
const context = isolate.createContextSync();

// do not prerender
export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default function Home() {
  return <main>code from lib: {<Comp />}</main>;
}
