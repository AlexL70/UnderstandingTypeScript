const person = {
  firstName: "Alex",
  age: 40,
};

const copiedPerson = { ...person };
person.age = 53;
console.log(copiedPerson);

const add = (...numbers: number[]) =>
  numbers.reduce((result, value) => result + value, 0);

console.log(add(6, 11, 5, 13));

const hobbies = ["Hiking", "Cooking", "Sports", "Driving", "Shopping"];
const [hobby1, hobby2, hobby3, ...remainings] = hobbies;
console.log(hobby1, hobby2, hobby3, remainings);

const { firstName: personName, age: personAge } = person;
console.log(personName, personAge);
