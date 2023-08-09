class Department {
  private employees: string[] = [];

  constructor(private id: string, public name: string) {}

  public describe(this: Department) {
    console.log(`Department: "${this.name}, id = "${this.id}"`);
  }

  public addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }

  public printEmployeesInfo(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const dep = new Department("ACC_DEP", "Accounting");
dep.describe();
dep.addEmployee("Tom Waits");
dep.addEmployee("Keith Richard");
dep.printEmployeesInfo();
