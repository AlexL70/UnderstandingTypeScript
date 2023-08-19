abstract class Department {
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static fiscalYear = 2023;
  static createEmployee(name: string) {
    return { name: name };
  }

  public abstract describe(this: Department): void;

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
  public describe(this: ITDepartment): void {
    console.log(`This is an ${this.name} with ID = ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get recentReport(): string {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw Error("No reports were added yet.");
  }

  set recentReport(value: string) {
    if (!value) {
      throw Error("recentReport value is undefined; cannot set");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting Department");
    this.lastReport = this.reports[0];
  }

  public describe(this: AccountingDepartment): void {
    console.log(`${this.name} – ID: ${this.id}`);
  }

  public addEmployee(this: AccountingDepartment, employee: string): void {
    if (employee === "Alex") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(this: AccountingDepartment, report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee = Department.createEmployee("Sally");
console.log(employee);
console.log(Department.fiscalYear);
console.log("");
const it = new ITDepartment("IT_DEP", ["Alex Levinson"]);
it.describe();
it.addEmployee("Tom Waits");
it.addEmployee("Keith Richard");
it.printEmployeesInfo();
console.log(it);
console.log("");

const accounting = new AccountingDepartment("ACC_DEP", []);
accounting.describe();
accounting.addEmployee("Alex");
accounting.addEmployee("Max");
try {
  console.log(accounting.recentReport);
} catch (error) {
  console.log(error);
}

// next two lines do the same thing – each one adds a report to the reports array
// and then sets lastReport property to the same value
accounting.addReport("Something went wrong.");
accounting.recentReport = "Something has been fixed.";

console.log(accounting.recentReport);
accounting.printReports();
console.log(accounting);
