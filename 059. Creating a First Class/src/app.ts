class Department {
  private name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public describe(this: Department) {
    console.log(`Department: "${this.name}"`);
  }

  public addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }

  public printEmployeesInfo(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const dep = new Department("Accounting");
dep.describe();
//const depCopy = { describe: dep.describe, name: "HR" };
//depCopy.describe();
dep.addEmployee("Tom Waits");
dep.addEmployee("Keith Richard");
dep.printEmployeesInfo();
