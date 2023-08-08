const add = (a: number, b: number) => a + b;
const printOutput: (a: any) => void = (output) => console.log(output);

printOutput(add(3, 5));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => printOutput(event));
}
