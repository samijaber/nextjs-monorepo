import { Comp } from "@mono/lib";

// do not prerender
export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default function Home() {
  return <main>code from lib: {<Comp />}</main>;
}
