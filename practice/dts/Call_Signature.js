"use strict";
const student = {
    name: "Sanjay",
    age: 22,
    greet: (country) => `Hi! I'm ${student.name}, I'm ${student.age} years old and I'm from ${country}.`,
    // (sport: string): string => return `My favorite sport is ${sport}.`
};
const intro = (student) => {
    const { name, age } = student;
    return `Hi! I'm ${name} and I'm ${age} years old.`;
};
console.log(intro(student));
console.log(student.greet("India"));
// console.log(student("Football"))
