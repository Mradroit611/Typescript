// Example using public, protected, and private modifiers

class Person {
    public name: string;      // Public property
    protected age: number;   // Protected property
    private gender: string;  // Private property

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
        this.sayHello();  // Accessing a private method within the class
    }

    protected sayHello() {
        console.log("Hello, I'm a person.");  // Protected method
    }
}

class Employee extends Person {
    constructor(name: string, age: number, gender: string) {
        super(name, age, gender);
    }

    public displayEmployeeDetails() {
        console.log(`Employee Details: ${this.name}, ${this.age}, ${this.gender}`);
        // Accessing protected method of the base class
        this.sayHello();
    }
}

// Creating instances of the classes
let person = new Person("Alice", 30, "Female");
let employee = new Employee("Bob", 25, "Male");

// Accessing public properties and methods
console.log(person.name);       // Output: "Alice"
person.displayDetails();        // Output: Name: Alice, Age: 30, Gender: Female

// Accessing protected and private members through inheritance
// These won't work outside the classes due to their access modifiers
// console.log(person.age);      // Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses
// console.log(person.gender);   // Error: Property 'gender' is private and only accessible within class 'Person'

// Accessing public properties and methods of Employee class
console.log(employee.name);              // Output: "Bob"
employee.displayEmployeeDetails();       // Output: Employee Details: Bob, 25, Male
