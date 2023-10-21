function Logger(description: string) {
  return function (constructor: Function) {
    console.log(`${description}\n${constructor.toString()}`);
  };
}
@Logger(`Logging ${Person.name} class definition...`)
class Person {
  name = "Alex";

  constructor() {
    console.log("Creating person object.");
  }
}

// Decorator runs even before class is instantiated.
const person = new Person();
console.log(person);
