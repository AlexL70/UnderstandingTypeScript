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

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (Array.isArray(element) || typeof element === "string") {
    if (element.length === 1) {
      descriptionText = "Got 1 element.";
    } else if (element.length > 1) {
      descriptionText = `Got ${element.length} elements.`;
    }
  }
  return [element, descriptionText];
}

console.log(countAndDescribe([]));
console.log(countAndDescribe([22]));
console.log(countAndDescribe([22, 33, 44]));
console.log(countAndDescribe("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(`Returned: ${extractAndConvert({ name: "Alex" }, "name")}`);
