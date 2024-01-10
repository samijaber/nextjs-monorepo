"use client";
import { safeDynamicRequire } from "./safeDynamicRequire";

const add = safeDynamicRequire("lodash/add") as typeof import("lodash");

export const runIsolatedVm = () => {
  return add(1, 2);
};
