const Max_value = (arr:number[]):number=>{
    let sortarray = arr.sort();
    let lngg = arr.length-1;
    let maxvalue = arr[lngg];
    return maxvalue;
}

let arrayy:number[] = [4, 45, 8, 98, 10];
let maxvalue:number = Max_value(arrayy);
console.log("Max Value: ", maxvalue);