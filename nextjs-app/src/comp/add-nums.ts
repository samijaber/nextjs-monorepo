"use client";

const serverAdd = () => {
  let safeDynamicRequire: any = () => {};
  try {
    safeDynamicRequire = eval("require");
    console.log("Loaded dynamic require");
  } catch (e) {
    console.log("Failed to load dynamic require: ", e);
  }
  return safeDynamicRequire("lodash/add");
};

const browserAdd = (a: number, b: number) => a + b;

const getAdd = () => {
  return typeof window !== "undefined" ? browserAdd : serverAdd();
};

export const addNums = () => {
  const add = getAdd();
  const newLocal = add(1, 2);
  console.log("Loaded lodash/add: ", add);
  console.log("1 + 2 = ", newLocal);
  return newLocal;
};
