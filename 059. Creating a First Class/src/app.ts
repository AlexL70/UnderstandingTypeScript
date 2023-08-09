class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const dep = new Department("My First Department");
console.log(dep);
