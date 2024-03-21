'use client';
Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

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
    return /*#__PURE__*/ React__default.default.createElement("div", null, /*#__PURE__*/ React__default.default.createElement("div", null, "1 + 2 = ", getEvalResult()));
};

exports.Comp = Comp;
