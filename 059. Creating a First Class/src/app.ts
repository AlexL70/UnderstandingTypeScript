class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department: "${this.name}"`);
  }
}

const dep = new Department("Accounting");
dep.describe();
const depCopy = { describe: dep.describe, name: "HR" };
depCopy.describe();
