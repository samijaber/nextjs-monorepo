import { Comp } from "@mono/lib";

// do not prerender
export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default function Home() {
  if (typeof window === undefined) {
    const ivm = globalThis.require("isolated-vm");
  }

  return <main>code from lib: {<Comp />}</main>;
}
