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

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting Department");
  }

  addReport(report: string) {
    this.reports.push(report);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("IT_DEP", ["Alex Levinson"]);
it.describe();
it.addEmployee("Tom Waits");
it.addEmployee("Keith Richard");
it.printEmployeesInfo();
console.log(it);

const accounting = new AccountingDepartment("ACC_DEP", []);
accounting.addReport("Something went wrong.");
accounting.addReport("Something has been fixed.");
accounting.printReports();
