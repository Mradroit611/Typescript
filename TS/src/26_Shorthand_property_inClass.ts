// Define a class using shorthand property syntax
class Person {
    // Shorthand properties
    constructor(public name: string, public age: number) {}

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create an instance of the Person class
let person3 = new Person("sanjay", 22);
let person2 = new Person("adroit", 21);

// Access properties and invoke method
person3.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
