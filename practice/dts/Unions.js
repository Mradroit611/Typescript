"use strict";
// Example of Union 
const double = (value) => {
    let typee = typeof value;
    if (typee === "string") {
        return value.toUpperCase();
    }
    else if (typee === "number") {
        return value * 2;
    }
};
console.log(double("sanjay"));
console.log(double(25));
const employee = {
    name: "sanjay",
    age: 29,
    emp_id: 41122,
    department: "Web"
};
