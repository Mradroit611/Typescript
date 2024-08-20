"use strict";
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    // Getter for width
    get width() {
        return this._width;
    }
    // Setter for width
    set width(value) {
        if (value > 0) {
            this._width = value;
        }
        else {
            console.log("Width must be positive");
        }
    }
    // Getter for height
    get height() {
        return this._height;
    }
    // Setter for height
    set height(value) {
        if (value > 0) {
            this._height = value;
        }
        else {
            console.log("Height must be positive");
        }
    }
    // Method to calculate area
    calculateArea() {
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
