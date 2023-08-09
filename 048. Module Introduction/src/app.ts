const add = (a: number, b: number = 1) => a + b;
const printOutput: (a: any) => void = (output) => console.log(output);

printOutput(add(5));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => printOutput(event));
}

const hobbies = ["Sports", "Cooking"];
const activeHobbied = ["Hiking"];
activeHobbied.push(...hobbies);
console.log(activeHobbied);

const person = {
  name: "Alex",
  age: 40,
};

const copiedPerson = { ...person };
person.age = 53;
console.log(copiedPerson);
