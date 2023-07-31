function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
): number | string {
  let combination: number | string;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    combination = +input1 + +input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    combination = input1 + input2;
  } else {
    throw new Error("Incompatible types!");
  }

  return resultConversion == "as-number"
    ? +combination
    : combination.toString();
}

const combinedAges = combine(26, 30, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("26", "30", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
