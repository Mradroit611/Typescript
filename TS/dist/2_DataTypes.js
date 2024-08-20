"use strict";
// Basic data types
let str = 'Hello, TypeScript!'; // String
let num = 42; // Number (supports integers and floating-point numbers)
let bool = true; // Boolean
// Arrays
let arr1 = [1, 2, 3]; // Array of numbers
let arr2 = ['apple', 'banana', 'cherry']; // Array of strings
let arr3 = [1, 'two', true]; // Array with mixed types (any)
// Tuples
let tuple = ['John', 25]; // Tuple with fixed types and fixed length
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let color = Color.Green; // Enum type
// Void (used for functions that do not return a value)
function logMessage(message) {
    console.log(message);
}
// Null and Undefined
let n = null;
let u = undefined;
// Object
let obj = { name: 'John', age: 30 }; // Any JavaScript object
// Type assertions
let someValue = 'this is a string';
let strLength = someValue.length; // Type assertion
// Union types
let unionType = 'apple'; // Union type
// Function types
function multiply(x, y) {
    return x * y;
}
// Type inference
let inferredType = 'typescript'; // TypeScript infers the type as string
let employee = { name: 'Alice', age: 28 };
// Never type (represents the type of values that never occur)
function throwError(message) {
    throw new Error(message);
}
