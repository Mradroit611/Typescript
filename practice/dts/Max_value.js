"use strict";
const Max_value = (arr) => {
    let sortarray = arr.sort();
    let lngg = arr.length - 1;
    let maxvalue = arr[lngg];
    return maxvalue;
};
let arrayy = [4, 45, 8, 98, 10];
let maxvalue = Max_value(arrayy);
console.log("Max Value: ", maxvalue);
