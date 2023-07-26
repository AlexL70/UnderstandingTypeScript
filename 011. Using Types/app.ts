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

const number1 = 5;
const number2 = 2.8;

const sum = add(number1, number2, true, "The result is");
