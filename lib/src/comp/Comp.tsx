import React from "react";

import { getEvalResult } from "./add-nums";

export const Comp = () => {
  return (
    <div>
      <div>1 + 2 = {getEvalResult()}</div>
    </div>
  );
};
