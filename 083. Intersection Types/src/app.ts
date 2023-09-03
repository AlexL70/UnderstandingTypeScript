type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// You can get roughly the same effect if you declare Admin and Employee
// as interfaces and then declare ElevatedEmployee as an interface that
// extends them both
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Alex",
  privileges: ["create", "view"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric; // means string, number or boolean

function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

let addRes = add("Alex", " Levinson");
console.log(addRes.split(" "));

type UnknownEmployee = Employee | Admin;
function printEmployeeInfo(employee: UnknownEmployee) {
  console.log(`Name: ${employee.name}`);
  if ("privileges" in employee) {
    console.log(`Privileges: ${employee.privileges}`);
  }
  if ("startDate" in employee) {
    console.log(`Start Date: ${employee.startDate}`);
  }
}

printEmployeeInfo(e1);
printEmployeeInfo({ name: "Tom", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Track {
  drive() {
    console.log("Driving a track...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo: ${amount}...`);
  }
}

type Vehicle = Car | Track;
const v1 = new Car();
const v2 = new Track();

function useVehicle(v: Vehicle) {
  if (v instanceof Track) {
    v.loadCargo(25);
  }
  v.drive();
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeen: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  var speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeen;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      throw new Error("Unknown animal type");
      break;
  }
  console.log(`Moving with speed ${speed}`);
}

let bird: Bird = { flyingSpeen: 10, type: "bird" };
let horse: Horse = { runningSpeed: 5, type: "horse" };
moveAnimal(bird);
moveAnimal(horse);

//const elem = <HTMLInputElement>document.getElementById("user-input");
const elem = document.getElementById("user-input");

if (elem) {
  (elem as HTMLInputElement).value = "Hi there!";
}

interface ErrorContainer {
  [key: string]: string; // means ErrorContainer can have any properties as long as they have string type
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  userName: "Must start with a capital character!",
};
console.log(errorBag);
