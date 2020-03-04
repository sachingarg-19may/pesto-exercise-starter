function flipArgs() {
  var result = [];
  for(let i = arguments.length - 1; i >= 0; i--) {
    result.push(arguments[i]);
  }

  return result;
}

export {
  flipArgs
};
