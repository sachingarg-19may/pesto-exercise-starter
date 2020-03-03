function sumFibs(num) {
  return fibSeries(0, 0, 0, 1, num);
}

function fibSeries(first, second, sum, index, max) {
  let newNum = 0;
  if (index === 1 || index === 2)
    newNum = 1;
  else
    newNum = first + second;

  if (newNum >= max) 
    return sum;
  
  if (newNum % 2 === 1)
    sum += newNum;
  
  return fibSeries(second, newNum, sum, index + 1, max);
}

export {
  sumFibs,
};
