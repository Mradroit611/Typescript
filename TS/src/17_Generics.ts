// Generics in TS allow you to create reusable components or functions that can work with multiple data types

function getFurstElement<T>(array: T[]): T{
    return array[0];
}

const numberrr = [1,2,3];
const firstNum = getFurstElement<number>(numberrr);
console.log(firstNum);

const string = ["sanjay", "adroit"];
const firstName = getFurstElement<string>(string);
console.log(firstName);