function Logger(description: string) {
  return function (constructor: Function) {
    console.log(`${description}\n${constructor.toString()}`);
  };
}

function WithTemplate(htmlTemplate: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = htmlTemplate;
    }
  };
}
//@Logger(`Logging ${Person.name} class definition...`)
@WithTemplate(`<h2>Hey Joe!</h2>`, "app")
class Person {
  name = "Alex";

  constructor() {
    console.log("Creating person object.");
  }
}

// Decorator runs even before class is instantiated.
const person = new Person();
console.log(person);
