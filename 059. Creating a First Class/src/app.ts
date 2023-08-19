interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string, public age: number) {}

  greet(phrase: string): void {
    console.log(`${phrase}, ${this.name}`);
  }
}

let user: Greetable;
user = new Person("Alex", 53);
user.greet("Hi there - I am");
console.log(user);
