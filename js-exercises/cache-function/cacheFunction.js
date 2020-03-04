var resultMap = new Map();
var cacheFunctionToExecute;

function cacheFunction(arg) {
  cacheFunctionToExecute = arg;
  return cache;
}

function cache(value) {
  if (resultMap.has(value)) {
    return resultMap[value];
  }

  var result = cacheFunctionToExecute(value);
  resultMap.set(value, result);
  return result;
}

export {
  cacheFunction,
};
