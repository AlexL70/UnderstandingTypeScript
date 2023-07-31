const person: {
  name: string;
  age: number;
  hobbies: string[];
  // here TS knows that it is 2-element array is expected and the first one must be a number
  // and the second one must be a string. The only exception is push() function. TS misses
  // to check if it does a right thing.
  role: [number, string];
} = {
  name: "Alexander",
  age: 53,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

console.log(person);
