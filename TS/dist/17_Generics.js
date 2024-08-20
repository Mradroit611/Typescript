"use strict";
// Generics in TS allow you to create reusable components or functions that can work with multiple data types
function getFurstElement(array) {
    return array[0];
}
const numberrr = [1, 2, 3];
const firstNum = getFurstElement(numberrr);
console.log(firstNum);
const string = ["sanjay", "adroit"];
const firstName = getFurstElement(string);
console.log(firstName);
