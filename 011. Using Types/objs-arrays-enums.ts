enum Role {
  Admin,
  ReadOnly,
  Author,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Alexander",
  age: 53,
  hobbies: ["Sports", "Cooking"],
  role: Role.Author,
};

console.log(person);
if (person.role === Role.Author) {
  console.log("is author!");
}
