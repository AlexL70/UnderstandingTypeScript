function add(
  n1: number,
  n2: number,
  logResult: boolean,
  prefix: string
): number {
  const sum = n1 + n2;
  if (logResult) {
    console.log(prefix, sum);
  }
  return sum;
}

const number1: number = 5; // we can assignt type explicitely
const number2 = 2.8; // but it can also be inferred from the value and it is the best practice

const sum = add(number1, number2, true, "The result is");
