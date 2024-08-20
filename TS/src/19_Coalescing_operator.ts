// Example of Coalescing Operator (??)
let userInputtt: string | null = null;

// Using coalescing operator to provide a default value
let username: string = userInputtt ?? "Guest";

console.log(username); 

// Another example with a non-null value
let userInputtt2: string | undefined = undefined;

let username2: string = userInputtt2 ?? "Guest";

console.log(username2); 

// Example with a non-null user input
let userInputtt3: string = "Alice";

let username3: string = userInputtt3 ?? "Guest";

console.log(username3); 
