"use strict";
// Example of Union Types
const double = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 2;
    }
    return -1;
};
console.log(double("sanjay"));
console.log(double(25));
const employee2 = {
    name: "sanjay",
    age: 29,
    emp_id: 41122,
    department: "Web"
};
console.log(employee2);
