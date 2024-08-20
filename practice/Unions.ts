// Example of Union 
const double = (value: number| string): number | string =>{
    let typee = typeof value;
    if(typee === "string"){
        return value.toUpperCase();
    }
    else if(typee === "number"){    
        return value*2;
    }
    
}

console.log(double("sanjay"));
console.log(double(25));



// Use of Union and Intersection 
type Person = {
    name: string;
    age: number
}

type Employee = {
    emp_id: number;
    department: string
}

// type EmployeeDetails = Person | Employee;        - Union

// const employee : EmployeeDetails = {
//     name: "sanjay",
//     age: 29,
//     emp_id: 41122
// }

type EmployeeDetails = Person | Employee;      //Intersection
const employee : EmployeeDetails = {
    name: "sanjay",
    age: 29,
    emp_id: 41122,
    department: "Web"
}

