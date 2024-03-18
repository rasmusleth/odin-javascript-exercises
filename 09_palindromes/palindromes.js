const palindromes = function (string) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyzæøå0123456789";

  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((character) => {
      return alphanumerical.includes(character);
    })
    .join("");

  const reversedString = cleanedString.split("").reverse().join("");

  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
