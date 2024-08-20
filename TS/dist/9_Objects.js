"use strict";
// Objects --------------------------------------------------
const person = {
    name: "sanjay",
    age: 22,
    address: {
        city: "Delhi",
        country: "India"
    }
};
console.log(person.name);
console.log(person.address.city);
// Object with methods defined using object literal syntax --------------------------------------------
let per = {
    firstName: "sanjay",
    lastName: "verma",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    greet: function (greeting) {
        return `${greeting}, ${this.firstName}!`;
    }
};
// Accessing methods of the object
console.log(per.fullName());
console.log(per.greet("Hello"));
// Using functions -------------------------------------------------------------------------------
function createUser({ name, isPaid }) {
    return console.log({ name, isPaid });
}
// let newUser = {name: "sanjay", isPaid: false, email: "sanjay@gmail.com"};
// createUser(newUser);
createUser({ name: "sanjay", isPaid: true });
function createCourse() {
    return { name: "sanjay", price: 200 };
}
console.log(createCourse());
