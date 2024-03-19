"use client";

let safeDynamicRequire: any = () => {};
try {
  safeDynamicRequire = eval("require");
  console.log("Loaded dynamic require", safeDynamicRequire);
} catch (e) {
  console.error("Failed to load dynamic require: ", e);
}

const isBrowser = typeof window !== "undefined";

const getAdd = () => {
  return isBrowser
    ? (a: number, b: number) => a + b
    : safeDynamicRequire("lodash/add");
};

const getServerVm = () => {
  const ivm = safeDynamicRequire("isolated-vm") as typeof import("isolated-vm");

  const isolate = new ivm.Isolate({ memoryLimit: 128 });

  console.log("ivm import successful");

  // Create a new context within this isolate. Each context has its own copy of all the builtin
  // Objects. So for instance if one context does Object.prototype.foo = 1 this would not affect any
  // other contexts.
  const context = isolate.createContextSync();

  // And let's test it out:
  const result = context.evalSync("1+3");
  // console.log("1 + 3 = ", result);
  return result;
};

export const getEvalResult = () => {
  const out = isBrowser ? new Function("return 1+3")() : getServerVm();
  console.log("out: ", out);

  return out;
};

export const addNums = () => {
  const add = getAdd();
  const newLocal = add(1, 2);
  // console.log("Loaded lodash/add: ", add);
  // console.log("1 + 2 = ", newLocal);
  return newLocal;
};
