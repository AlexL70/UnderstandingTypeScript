function Logger(description: string) {
  console.log("Logger's factory running...");
  return function (constructor: Function) {
    console.log(`${description}\n${constructor.toString()}`);
  };
}

function WithTemplate(htmlTemplate: string, hookId: string) {
  console.log("Template's factory running...");
  return function (_: Function) {
    console.log("Rendering template...");
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = htmlTemplate;
    }
  };
}

@Logger(`Logging ${Person.name} class definition...`)
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
