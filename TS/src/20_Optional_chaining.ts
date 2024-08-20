// Sample object with nested structure
const userr = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Wonderland",
        postalCode: "12345"
    },
    // Uncomment to simulate an optional property
    // address: null,
    // address: undefined,
};

// Accessing nested properties safely using optional chaining
const street = userr.address?.street;
console.log(street); // Output: "123 Main St"

const country = userr.address.country;
console.log(country); // Output: undefined (does not throw an error)

const count = userr.address.country?.roadmap; //if we remove optioanl chaining it will throw an error
console.log(count);




// ----------------------------------------------------------------------------------------------------




// Example of Optional Chaining with Arrays in TypeScript

// Sample object with an array structure
const data = {
    users: [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 35 },
        // Uncomment to simulate an undefined element
        // undefined,
        // Uncomment to simulate a null element
        // null,
    ]
};

// Accessing array elements safely using optional chaining
const userName1 = data.users[0]?.name;
console.log(userName1); 
const userName2 = data.users[3]?.name;
console.log(userName2); 

const userAge1 = data.users[1]?.age;
console.log(userAge1); 
const userAge2 = data.users[2]?.age;
console.log(userAge2); 

const userAge3 = data.users[4]?.age;
console.log(userAge3); 
