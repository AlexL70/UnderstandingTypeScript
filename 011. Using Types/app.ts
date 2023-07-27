const person = {
  name: "Alexander",
  age: 53,
  hobbies: ["Sports", "Cooking"],
};

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
