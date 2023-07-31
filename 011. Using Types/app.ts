function combine(
  input1: number | string,
  input2: number | string
): number | string {
  let combination: number | string;
  if (typeof input1 === "number" && typeof input2 === "number") {
    combination = input1 + input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    combination = input1 + input2;
  } else {
    throw new Error("Incompatible types!");
  }

  return combination;
}

const combinedAges = combine(26, 30);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);
