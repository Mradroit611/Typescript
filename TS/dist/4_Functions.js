"use strict";
// Function Declaration
function greet(name) {
    console.log(`Hello, ${name}!`);
}
// Function Expression
const goodbye = function (name) {
    console.log(`Goodbye, ${name}!`);
};
// Arrow Function
const add = (a, b) => {
    return a + b;
};
// Optional Parameter
function greetOptional(name) {
    if (name) {
        console.log(`Hello, ${name}!`);
    }
    else {
        console.log(`Hello, guest!`);
    }
}
// Default Parameter
function greetDefault(name = "guest") {
    console.log(`Hello, ${name}!`);
}
// Example usage
greet("Alice");
goodbye("Bob");
console.log(add(3, 5));
greetOptional();
greetDefault();
greetDefault("Charlie");
