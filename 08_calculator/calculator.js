const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  return array.reduce((total, current) => (total += current), 0);
};

const multiply = function (array) {
  return array.reduce((total, current) => (total *= current), 1);
};

const power = function (base, power) {
  return base ** power;
};

const factorial = function (factorial) {
  let sum = 1;
  for (let i = 2; i <= factorial; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
