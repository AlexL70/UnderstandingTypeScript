interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user: Person;
user = {
  name: "Alex",
  age: 53,
  greet(phrase: string) {
    console.log(`${phrase}, ${this.name}`);
  },
};

user.greet("Hi there - I am");
