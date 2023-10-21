function Logger(constructor: Function) {
  console.log(`Logging class definition...\n${constructor.toString()}`);
}
@Logger
class Person {
  name = "Alex";

  constructor() {
    console.log("Creating person object.");
  }
}

// Decorator runs even before class is instantiated.
//const person = new Person();
//console.log(person);
