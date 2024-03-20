import { Comp } from "../lib-src";

// do not prerender
export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default function Home() {
  return <main>code from lib: {<Comp />}</main>;
}
