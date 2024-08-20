"use strict";
// Example of Coalescing Operator (??)
let userInputtt = null;
// Using coalescing operator to provide a default value
let username = userInputtt !== null && userInputtt !== void 0 ? userInputtt : "Guest";
console.log(username);
// Another example with a non-null value
let userInputtt2 = undefined;
let username2 = userInputtt2 !== null && userInputtt2 !== void 0 ? userInputtt2 : "Guest";
console.log(username2);
// Example with a non-null user input
let userInputtt3 = "Alice";
let username3 = userInputtt3 !== null && userInputtt3 !== void 0 ? userInputtt3 : "Guest";
console.log(username3);
