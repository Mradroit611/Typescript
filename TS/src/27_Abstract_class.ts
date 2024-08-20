// abstract class is a class that cannot be instantiated directly and is meant to serve as a base or blueprint for other classes.
abstract class Shape {
    // Abstract method that must be implemented by derived classes
    abstract calculateArea(): number;

    // Concrete method
    display(): void {   // we can't do that in interface that's the diff btw abstract class and interface
        console.log("Displaying shape");
    }
}

// Derived class Circle extending Shape
class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    // Implementing abstract method
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// Derived class Rectangle extending Shape
class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    // Implementing abstract method
    calculateArea(): number {
        return this.width * this.height;
    }
}

// Usage of abstract class and derived classes
let circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea()); // Output: Circle Area: 78.53981633974483
circle.display(); // Output: Displaying shape

let rectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", rectangle.calculateArea()); // Output: Rectangle Area: 24
rectangle.display(); // Output: Displaying shape

// Creating an instance of the abstract class directly (not allowed)
// let shape = new Shape(); // Error: Cannot create an instance of an abstract class
