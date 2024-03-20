"use client";
import React from "react";

const isBrowser = typeof window !== "undefined";
const getIvm = () => {
  try {
    return eval("require")("isolated-vm");
  } catch (error) {
    return globalThis.require("isolated-vm");
  }
};
const getServerVm = () => {
  const ivm = getIvm();
  const isolate = new ivm.Isolate({
    memoryLimit: 128,
  });
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
const getEvalResult = () => {
  const out = isBrowser ? new Function("return 1+3")() : getServerVm();
  console.log("out: ", out);
  return out;
};

const Comp = () => {
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement("div", null, "1 + 2 = ", getEvalResult())
  );
};

export { Comp };
