// Basic data types
let str: string = 'Hello, TypeScript!'; // String
let num: number = 42; // Number (supports integers and floating-point numbers)
let bool: boolean = true; // Boolean

// Arrays
let arr1: number[] = [1, 2, 3]; // Array of numbers
let arr2: string[] = ['apple', 'banana', 'cherry']; // Array of strings
let arr3: any[] = [1, 'two', true]; // Array with mixed types (any)

// Tuples
let tuple: [string, number] = ['John', 25]; // Tuple with fixed types and fixed length

// Enum
enum Color { Red, Green, Blue };
let color: Color = Color.Green; // Enum type

// Void (used for functions that do not return a value)
function logMessage(message: string): void {
    console.log(message);
}

// Null and Undefined
let n: null = null;
let u: undefined = undefined;

// Object
let obj: object = { name: 'John', age: 30 }; // Any JavaScript object

// Type assertions
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length; // Type assertion

// Union types
let unionType: string | number = 'apple'; // Union type

// Function types
function multiply(x: number, y: number): number {
    return x * y;
}

// Type inference
let inferredType = 'typescript'; // TypeScript infers the type as string

// Type aliases
type Employee = {
    name: string;
    age: number;
}

let employee: Employee = { name: 'Alice', age: 28 };

// Never type (represents the type of values that never occur)
function throwError(message: string): never {
    throw new Error(message);
}
