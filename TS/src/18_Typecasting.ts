// Example of Type Casting (Type Assertion) with angle-bracket syntax
let userInputt: any = "Hello, TypeScript!";

// Using angle-bracket syntax
let strLength1: number = (<string>userInputt).length;
console.log(strLength1); 

// Another example with angle-bracket syntax
let numericInput: any = 12345;

let numLength: number = (<number>numericInput).toString().length;
console.log(numLength); 

// Using 'as' syntax
let strLength2: number = (userInputt as string).length;
console.log(strLength2); 