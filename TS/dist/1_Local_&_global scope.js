"use strict";
const globalvar = "I am a global variable";
function scopeExample() {
    if (true) {
        let localVar = 'I am a local variable'; // Declared inside block scope
        console.log(localVar);
    }
    //console.log(localVar); // Error: localVar is not defined
    console.log(globalvar);
}
scopeExample();
