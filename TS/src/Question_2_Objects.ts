export const myObject = {
    a: 1,
    b: 2,
    c: 3,
};

// Correct typing for objectKeys function
const objectKeys = <Obj extends object>(obj: Obj): (keyof Obj)[] => {
    return Object.keys(obj) as (keyof Obj)[];
};

// Using objectKeys to iterate over keys and access values in myObject
objectKeys(myObject).forEach((key) => {
    console.log(myObject[key]); // Accessing values safely
});
