interface Greetable {
  readonly name: string;

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
//  Because name property in readonly in Greeteable interface
//  trying to set it anywhere but a constructor, will cause an error
//user.name = "Max";
user.greet("Hi there - I am");
console.log(user);
