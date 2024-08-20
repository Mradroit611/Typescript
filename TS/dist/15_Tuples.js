"use strict";
// Tuples are data structure that allows you to store a fixed-size collection of elements of different types.
// They are similar to array, but with key difference: the types of an elements in a tuple are fixed and declared
// at the time of CSSStyleDeclaration, whereas array can hold element of the same type, and their size can vary
const displayInfo = (person6) => {
    const [name, age, hasDriverLicence] = person6;
    console.log(`Name: ${name}, Age: ${age}, Driver's License: ${hasDriverLicence ? "Yes" : "No"}`);
};
const person65 = ["sanjay", 22, true];
// const person62: Person6Info = [22, "adroit", false]; - order is not correct so it's gonna throw an error 
displayInfo(person65);
// -----------------------------------------------------------------------------------
// Declaring a tuple variable
let employee1;
// Initializing the tuple
employee1 = ['sanjay', 22];
// Accessing elements of the tuple
console.log(employee1[0]);
console.log(employee1[1]);
// Invalid assignment (types must match the defined tuple)
// employee1 = [22, 'sanjay']; // Error: Type 'number' is not assignable to type 'string'.
// Optional elements in tuples
let person6;
person6 = ['sanjay'];
person6 = ['adroit', 22];
// Accessing optional elements
console.log(person6[0]);
console.log(person6[1]);
// Tuple with rest elements
let values; // Rest elements must all be booleans
values = ['Hello', 10, true, false, true];
console.log(values.slice(2));
values = ['World', 5, true];
// Accessing rest elements
console.log(values[0]);
console.log(values[1]);
console.log(values.slice(2));
