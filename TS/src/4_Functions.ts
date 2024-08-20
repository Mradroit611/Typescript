// Function Declaration
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

// Function Expression
const goodbye = function(name: string): void {
    console.log(`Goodbye, ${name}!`);
};

// Arrow Function
const add = (a: number, b: number): number => {
    return a + b;
};

// Optional Parameter
function greetOptional(name?: string): void {
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log(`Hello, guest!`);
    }
}

// Default Parameter
function greetDefault(name: string = "guest"): void {
    console.log(`Hello, ${name}!`);
}


// Example usage
greet("Alice");               
goodbye("Bob");                
console.log(add(3, 5));       
greetOptional();               
greetDefault();                
greetDefault("Charlie");      

