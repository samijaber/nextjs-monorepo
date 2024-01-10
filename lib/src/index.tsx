import { safeDynamicRequire } from "./safeDynamicRequire";

const ivm = safeDynamicRequire("isolated-vm") as typeof import("isolated-vm");

export const runIsolatedVm = () => {
  const isolate = new ivm.Isolate({ memoryLimit: 128 });
  const context = isolate.createContextSync();
  const script = isolate.compileScriptSync("1 + 2");
  const result = script.runSync(context);
  console.log({ result });
  isolate.dispose();
};
