// Example of Union Types
const double = (value: number | string): number | string => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 2;
    }
    return -1;
}

console.log(double("sanjay"));
console.log(double(25)); 

// Use of Union and Intersection Types
type Person7 = {
    name: string;
    age: number;
}

type Employee2 = {
    emp_id: number;
    department: string;
}

type Employee2Details = Person7 & Employee2; // Intersection Type

const employee2: Employee2Details = {
    name: "sanjay",
    age: 29,
    emp_id: 41122,
    department: "Web"
}

console.log(employee2);
