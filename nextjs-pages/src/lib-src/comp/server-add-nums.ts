const getIvm = (): typeof import("isolated-vm") => {
  try {
    return eval("require")("isolated-vm");
  } catch (error) {
    throw error;
  }
};

export const getServerEval = () => {
  const ivm = getIvm();
  const isolate = new ivm.Isolate({ memoryLimit: 128 });

  console.log("ivm import successful");
  const context = isolate.createContextSync();
  const result = context.evalSync("1+3");
  return result;
};
