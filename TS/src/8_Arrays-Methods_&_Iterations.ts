let numbers: number[] = [1, 2, 3, 4, 5];

// Using pop and push methods
console.log("Original array:", numbers);
const a = numbers.pop(); // Removes the last element (5), and returns it
const b = numbers.push(6); // Adds 6 to the end of the array, and returns the length 
console.log("Array after pop and push:", numbers);
console.log(a)
console.log(b)

// Using shift and unshift methods
numbers.unshift(0); // Adds 0 to the beginning of the array and returns the length
let shiftedElement = numbers.shift(); // Removes the first element (0) and returns it
console.log("Array after unshift and shift:", numbers);
console.log("Shifted element:", shiftedElement);

// Using for-of loop to iterate over elements
console.log("Using for-of loop:");
for (let num of numbers) {
    console.log(num);
}

// Using for-in loop to iterate over indices (not recommended for arrays)
console.log("Using for-in loop:");
for (let index in numbers) {
    console.log(`Index: ${index}, Value: ${numbers[index]}`);
}

// Using forEach method to iterate over elements
console.log("Using forEach method:");
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// Using map method to create a new array with modified elements
let doubledNumbers = numbers.map(num => num * 2);
console.log("Array after mapping (doubling each element):", doubledNumbers);

// Using filter method to create a new array with filtered elements
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Filtered array (even numbers):", evenNumbers);

// Using reduce method to compute a single value from the array
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all elements:", sum);
