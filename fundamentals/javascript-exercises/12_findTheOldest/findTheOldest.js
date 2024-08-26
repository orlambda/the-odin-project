function calculateAge (person) {
    const currentYear = new Date().getUTCFullYear();
    if ('yearOfDeath' in person) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return currentYear - person.yearOfBirth;
    }
}

const findTheOldest = function(people) {
    let highestAge = 0;
    let oldestPerson = undefined;
    for (let person of people) {
        let currentAge = calculateAge(person);
        if (currentAge > highestAge) {
            highestAge = currentAge;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};


console.log(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]).name)
// Do not edit below this line
module.exports = findTheOldest;
