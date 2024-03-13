const convertToCelsius = function (degreesFahreheit) {
  let degreesCelsius = (degreesFahreheit - 32) * (5 / 9);
  return parseFloat(degreesCelsius.toFixed(1));
};

const convertToFahrenheit = function (degreesCelsius) {
  let degreesFahrenheit = degreesCelsius * (9 / 5) + 32;
  return parseFloat(degreesFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
