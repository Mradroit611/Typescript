"use strict";
const calculateAverage = (arr) => {
    const lng = arr.length;
    let sum = arr.reduce((acc, cv) => acc + cv, 0);
    const average = sum / lng;
    return average;
};
const array = [3, 4, 5, 7];
const aray = calculateAverage(array);
console.log("Average: ", aray);
