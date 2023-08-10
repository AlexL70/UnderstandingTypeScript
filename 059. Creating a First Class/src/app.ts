class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT Department");
  }
}

const dep = new ITDepartment("IT_DEP", ["Alex Levinson"]);
dep.describe();
dep.addEmployee("Tom Waits");
dep.addEmployee("Keith Richard");
dep.printEmployeesInfo();
console.log(dep);
