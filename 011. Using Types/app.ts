let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Alex";
// without this check TS would generate an error
// when assigning "unknown" type to "string" (unlike "any" type)
if (typeof userInput === "string") {
  userName = userInput;
}
