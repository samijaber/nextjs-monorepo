import { Head, Html, Main, NextScript } from "next/document";
// import ivm from "isolated-vm";

// const isolate = new ivm.Isolate({ memoryLimit: 128 });
// const context = isolate.createContextSync();
// console.log({ context });

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
