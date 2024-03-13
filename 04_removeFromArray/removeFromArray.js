const removeFromArray = function (array, ...inputsToRemove) {
  inputsToRemove.forEach((inputToRemove) => {
    array = array.filter((item) => {
      return item !== inputToRemove;
    });
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
