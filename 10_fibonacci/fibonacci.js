const fibonacci = function (memberIndex) {
  if (parseInt(memberIndex) === undefined)
    return console.log("Error, must be a number");
  if (memberIndex < 0) return "OOPS";

  let fibonacciSequence = [0, 1];
  let numbersToCalculate = memberIndex - 1;

  for (let i = 0; i < numbersToCalculate; i++) {
    fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[i + 1]);
  }

  return fibonacciSequence[memberIndex];
};

// Do not edit below this line
module.exports = fibonacci;
