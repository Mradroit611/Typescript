"use strict";
// const person = {
//     name: "Sanjay",
//     age: 27,
//     isStudent: true,
//     address: {
//         city: "Delhi",
//         country: "India"
//     }
// }
const person = {
    name: "Sanjay",
    age: 27,
    isStudent: true,
    address: {
        city: "Delhi",
        country: "India"
    }
};
// Accessing the object data 
console.log(person.address.country);
// Updating the object data 
person.address.country = "Nepal",
    console.log(person.address.country);
