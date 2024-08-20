// Array ------------------------------------------------------------------------
let arr = ["sanjay", "adroit"];
arr.push("verma");
// arr.push(5)  //This will throw an error because the array has been considered as string because there is no number if we want to push number than we have to add number in an array
console.log(arr);
let arrr = ["sanjay", "adroit", 100];
arrr.push(10); //now it will work because the array contains string and number

// Array with type 
let nu: number[] = [1,2,3,4,5];




// Ways to create an array ----------------------------------------------------------

// ------- Using array literal syntax ---------
let array: string[] = ["sanjay", "verma"];

// --------Using the array constructor ---------
let number: number[] = new Array(1,2,3,4,5,6);

// Using the Array constructor with a single number to define length
let emptyArray: any[] = new Array(5);  // Creates an array with length 5, but elements are initially undefined

// Using type parameter to specify array type
let names: Array<string> = new Array("Alice", "Bob", "Charlie");


// -----------Using Array.from()-----------
// Create an array from a string
let chars: string[] = Array.from("Hello");
// Example 2: Creating an array of numbers from a string
let numberArray2: number[] = Array.from("12345", Number);

// Create an array from a Set
let set = new Set([1, 2, 3]);
let arrayFromSet: number[] = Array.from(set);



console.log(number)
console.log(emptyArray)
console.log(emptyArray.length);
console.log(names)
console.log(chars)
console.log(numberArray2);
console.log(arrayFromSet)