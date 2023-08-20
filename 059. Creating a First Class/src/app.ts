//  Define function type as an interface
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
// This function definition complies with AddFn interface
add = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name: string;
}

// Greeteable interface extends Named one meaning it
// has all properties and methods defined in Named one
// plus ones defined in itself. One interface can extend
// several ones
interface Greetable extends Named {
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
