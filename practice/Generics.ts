// Generics in TS allow you to create reusable components or functions that can work with 
// multiple data types

function display <T> (value: any): T{
    return value;
}

const number = display<number>(50);
const string = display<string>("Hello!");
const boolean = display<boolean>(true);

console.log(number);
console.log(string);
console.log(boolean);