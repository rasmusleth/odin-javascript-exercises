const findTheOldest = function (peopleArray) {
  for (person of peopleArray) {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear();
    }
  }

  let ageArray = peopleArray.map((person) => {
    person["age"] = person.yearOfDeath - person.yearOfBirth;
    return person;
  });

  ageArray.sort((a, b) => b.age - a.age);

  return ageArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
