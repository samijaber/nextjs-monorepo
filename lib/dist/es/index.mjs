'use client';
import React from 'react';

const getBrowserEval = ()=>new Function("return 1+3")();

const getIvm = ()=>{
    try {
        return eval("require")("isolated-vm");
    } catch (error) {
        throw error;
    }
};
const getServerEval = ()=>{
    const ivm = getIvm();
    const isolate = new ivm.Isolate({
        memoryLimit: 128
    });
    console.log("ivm import successful");
    const context = isolate.createContextSync();
    const result = context.evalSync("1+3");
    return result;
};

const isBrowser = typeof window !== "undefined";
const getEvalResult = ()=>{
    const out = isBrowser ? getBrowserEval() : getServerEval();
    return out;
};

const Comp = ()=>{
    return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("div", null, "1 + 2 = ", getEvalResult()));
};

export { Comp };
