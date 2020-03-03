function sumAll(...args) {
  let sum = 0;
  var small = args[0][0] >= args[0][1] ? args[0][1] : args[0][0];
  var large = args[0][0] >= args[0][1] ? args[0][0] : args[0][1];
  for(let i = small; i <= large; i++) {
    sum += i;
  }

  return sum;
}

export {
  sumAll,
};
