const sumAll = function (lowerBound, upperBound) {
  if (lowerBound < 0 || upperBound < 0) return "ERROR";
  if (!Number.isInteger(lowerBound) || !Number.isInteger(upperBound))
    return "ERROR";
  if (lowerBound > upperBound) {
    let tmpValue = upperBound;
    upperBound = lowerBound;
    lowerBound = tmpValue;
  }

  let sum = 0;
  while (lowerBound <= upperBound) {
    sum += lowerBound;
    lowerBound++;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
