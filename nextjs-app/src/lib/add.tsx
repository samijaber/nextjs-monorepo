"use client";
import { createRequire } from "node:module";

let safeDynamicRequire: any = () => {};
try {
  safeDynamicRequire = createRequire(__dirname);
} catch (e) {
  safeDynamicRequire = eval("require");
}

const add = safeDynamicRequire("lodash/add");

export const add3 = () => {
  return add(1, 2);
};
