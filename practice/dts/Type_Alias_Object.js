"use strict";
const person = {
    name: "Sanjay",
    age: 22,
    isStudent: true,
    address: {
        city: "Delhi",
        country: "India"
    }
};
const person2 = {
    name: "Adroit",
    age: 22,
    isStudent: true,
    address: {
        city: "Delhi",
        country: "India"
    }
};
const greeting = (person) => {
    return `Welcome ${person.name} you are an ${person.address.country}`;
};
console.log(greeting(person));
