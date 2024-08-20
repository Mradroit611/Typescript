"use strict";
// Default Prameter 
const greet = (name, id = 1) => {
    return `Welcome ${name} your employe id is ${id}`;
};
const emp = greet("sanjay");
console.log(emp);
// Optional Parameter 
const greet2 = (name, id) => {
    if (id) {
        return `Welcome ${name} your employe id is ${id}`;
    }
    else {
        return `Welcome ${name}`;
    }
};
const empp = greet2("sanjay");
console.log(empp);
