var funcExecutor;
var executeCount;

const limitFunctionCallCount = (func, count) => {
  funcExecutor = func;
  executeCount = count;

  return funcExecution;
};

function funcExecution() {
  if (executeCount) {
    executeCount -= 1;
    return funcExecutor.apply(funcExecutor, Array.prototype.slice.call(arguments, 0));
  }

  return null;
}

export {
  limitFunctionCallCount,
};
