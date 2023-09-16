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
