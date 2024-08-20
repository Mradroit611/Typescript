export const myObject = {
    a: 1,
    b: 2,
    c: 3,
};
// Correct typing for objectKeys function
const objectKeys = (obj) => {
    return Object.keys(obj);
};
// Using objectKeys to iterate over keys and access values in myObject
objectKeys(myObject).forEach((key) => {
    console.log(myObject[key]); // Accessing values safely
});
