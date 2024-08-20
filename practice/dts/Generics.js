"use strict";
// Generics in TS allow you to create reusable components or functions that can work with 
// multiple data types
function display(value) {
    return value;
}
const number = display(50);
const string = display("Hello!");
const boolean = display(true);
console.log(number);
console.log(string);
console.log(boolean);
