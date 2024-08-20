const globalvar:string = "I am a global variable"; 
function scopeExample() {
    if (true) {
        let localVar: string = 'I am a local variable'; // Declared inside block scope
        console.log(localVar);
    }

    //console.log(localVar); // Error: localVar is not defined
    console.log(globalvar);
}

scopeExample();
