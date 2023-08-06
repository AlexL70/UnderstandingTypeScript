let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Alex";
// without this check TS would generate an error
// when assigning "unknown" type to "string" (unlike "any" type)
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured!", 500);
