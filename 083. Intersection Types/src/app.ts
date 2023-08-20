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
