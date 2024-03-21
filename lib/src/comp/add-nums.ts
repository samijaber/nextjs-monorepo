import { getBrowserEval } from "./browser-add-nums";
import { getServerEval } from "./server-add-nums";

const isBrowser = typeof window !== "undefined";

export const getEvalResult = () => {
  const out = isBrowser ? getBrowserEval() : getServerEval();
  return out;
};
