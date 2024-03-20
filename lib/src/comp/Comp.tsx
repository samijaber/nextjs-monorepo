"use client";
import React from "react";

import { addNums, getEvalResult } from "./add-nums";

export const Comp = () => {
  return (
    <div>
      {/* <div>1 + 2 = {addNums()}</div> */}
      <div>1 + 2 = {getEvalResult()}</div>
    </div>
  );
};
