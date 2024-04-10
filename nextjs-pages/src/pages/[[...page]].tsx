import { Comp } from "@samijaber/isolated-vm-test";

// do not prerender
export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default function Home() {
  return <main>code from lib: {<Comp />}</main>;
}
