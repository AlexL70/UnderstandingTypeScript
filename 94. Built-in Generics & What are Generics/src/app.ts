const names: Array<string> = ["Max", "Alex"];
console.log(names);

const promise: Promise<string> = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("This promise is resolved!");
  }, 500);
});

promise.then((data) => {
  console.log(data.split(" "));
});

const myFunc = () => promise;
myFunc();

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign<T, U>(objA, objB);
}

// would give an error because 52 is not an object and it breaks a restriction
//const merged = merge({ name: "Alex" }, 52);
const merged = merge({ name: "Alex" }, { age: 52 });
console.log(merged.name, merged.age);
