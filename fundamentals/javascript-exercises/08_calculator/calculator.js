const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum;	
};

const multiply = function(a) {
  if (a.length === 0) {
    return "ERROR"
  }
  let total = a[0];
  for (let i = 1; i < a.length; i++) {
    total *= a[i];
  }
  return total;
};

const power = function(a, b) {
  return a ** b;	
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return undefined;
  }
  if (n === 1) {
    return n;
  } else {
    return (n * (factorial(n-1)))
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
