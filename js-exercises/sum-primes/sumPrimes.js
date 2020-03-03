function sumPrimes(num) {
  let sum = 0;
  for(let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

function isPrime(num) {
  for (let i = parseInt(num / 2); i > 1; i--) {
    if (num % i === 0 && i > 1) {
      return false;
    }
  }

  return true;
}

export {
  sumPrimes,
};
