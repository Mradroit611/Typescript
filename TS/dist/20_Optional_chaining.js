"use strict";
var _a, _b, _c, _d, _e, _f, _g;
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
const street = (_a = userr.address) === null || _a === void 0 ? void 0 : _a.street;
console.log(street); // Output: "123 Main St"
const country = userr.address.country;
console.log(country); // Output: undefined (does not throw an error)
const count = (_b = userr.address.country) === null || _b === void 0 ? void 0 : _b.roadmap; //if we remove optioanl chaining it will throw an error
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
const userName1 = (_c = data.users[0]) === null || _c === void 0 ? void 0 : _c.name;
console.log(userName1);
const userName2 = (_d = data.users[3]) === null || _d === void 0 ? void 0 : _d.name;
console.log(userName2);
const userAge1 = (_e = data.users[1]) === null || _e === void 0 ? void 0 : _e.age;
console.log(userAge1);
const userAge2 = (_f = data.users[2]) === null || _f === void 0 ? void 0 : _f.age;
console.log(userAge2);
const userAge3 = (_g = data.users[4]) === null || _g === void 0 ? void 0 : _g.age;
console.log(userAge3);
