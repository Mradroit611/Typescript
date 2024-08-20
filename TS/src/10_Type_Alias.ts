// Type Alias --------------------------------------------------------
type Person ={
    name: string;
    age: number;
    address: {
        city: string; country:string;
    }
}

const personn:Person={
    name : "sanjay",
    age: 22,
    address: {
        city:"delhi",
        country: "india",
    }
}
console.log(personn);





// -------------------------------- Combining Types ---------------------------------------------- 


// Intersection Types ------------------------------------------------------------------
type Per = {
    name: string;
    age: number;
};

// Extend Person type to include address field
type ExtendedPerson = Per & { //(&) allow you to combine multiple types into a single type
    address: string;
};

// Example usage
let person1: ExtendedPerson = {
    name: "Alice",
    age: 30,
    address: "123 Main St"
};

// Printing details
console.log(`Name: ${person1.name}, Age: ${person1.age}, Address: ${person1.address}`);




// Inline Type Declaration --------------------------------------------------------
type Address = {
    street: string;
    city: string;
};

type Pers = {
    name: string;
    age: number;
    address: Address; // Using Address type within Person type
};

// Example usage
let personnn: Pers = {
    name: "Adroit",
    age: 30,
    address: {
        street: "2",
        city: "Delhi"
    }
};

// console.log(personnn);
console.log(`Name: ${personnn.name}, Age: ${personnn.age}, Address: ${personnn.address.street}, ${personnn.address.city}`);






