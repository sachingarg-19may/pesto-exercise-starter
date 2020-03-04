
// Don't change the export values.
// You can use the function in the Math module

const sqrt = (a) => (a * a);
const power = (a, b) => {
  var sum = a;
  for(let i = 2; i <= b; i++) {
    sum = a;
  }

  return sum;
};
const round = (a) => {
  var numString =  a + '';
  var decimalSplits = numString.split('.')
  if (decimalSplits.length > 2) {
    return a;
  }

  return parseInt(decimalSplits[1][0]) >= 5 ? parseInt(decimalSplits[0][0]) + 1 : parseInt(decimalSplits[0][0]);
};

export {
  sqrt,
  power,
  round,
};
