const person = {
  name: "Alex",
  age: 40,
};

const copiedPerson = { ...person };
person.age = 53;
console.log(copiedPerson);

const add = (...numbers: number[]) =>
  numbers.reduce((result, value) => result + value, 0);

console.log(add(6, 11, 5, 13));
