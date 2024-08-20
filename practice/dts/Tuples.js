"use strict";
// Tuples are data structure that allows you to store a fixed-size collection of elements of different types.
// They are similar to array, but with key difference: the types of an elements in a tuple are fixed and declared
// at the time of CSSStyleDeclaration, whereas array can hold element of the same type, and their size can vary
const displayInfo = (person) => {
    const [name, age, hasDriverLicence] = person;
    console.log(`Name: ${name}, Age: ${age}, Driver's License: ${hasDriverLicence ? "Yes" : "No"}`);
};
const person1 = ["sanjay", 22, true];
// const person2: PersonInfo = [22, "adroit", false]; - order is not correct so it's gonna throw an error 
displayInfo(person1);
