class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    // Getter for width
    get width(): number {
        return this._width;
    }

    // Setter for width
    set width(value: number) {
        if (value > 0) {
            this._width = value;
        } else {
            console.log("Width must be positive");
        }
    }

    // Getter for height
    get height(): number {
        return this._height;
    }

    // Setter for height
    set height(value: number) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log("Height must be positive");
        }
    }

    // Method to calculate area
    calculateArea(): number {
        return this._width * this._height;
    }
}

// Creating an instance of Rectangle
let rectangle = new Rectangle(10, 5);

// Using the getter and setter
console.log("Width:", rectangle.width); 
console.log("Height:", rectangle.height); 

rectangle.width = 20; // Setting width using setter
rectangle.height = 8; // Setting height using setter

console.log("Width:", rectangle.width); 
console.log("Height:", rectangle.height); 

console.log("Area:", rectangle.calculateArea()); 