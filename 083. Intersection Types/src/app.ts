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

function add(a: Combinable, b: Combinable) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

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
