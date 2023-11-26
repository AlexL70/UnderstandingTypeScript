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

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator running...");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;
  set price(value: number) {
    if (value <= 0) {
      throw new Error("Invalid price - should be positive!");
    }
    this._price = value;
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
