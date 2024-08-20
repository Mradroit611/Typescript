const fruits:string[] = ["apple", "banana", "grapes", "orange"];

// Adding elements to an array  using push
const newUpdatedFruits = fruits.push("Kiwi");
console.log(newUpdatedFruits);
console.log(fruits);

// Removing an element from an array using pop 
const lastData = fruits.pop();
console.log(lastData);
console.log(fruits);


// Iterating over elements 

// Using for loop
for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// Using for ..of loop 
for(const fruit of fruits){
    console.log(fruit);
}

// Using forEach Method 
fruits.forEach((curVal:string)=> console.log(curVal))