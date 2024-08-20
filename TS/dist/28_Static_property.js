"use strict";
// 'static' keyword is used to define properties and methods that belong to the class itself rather than to instances of the class. Static members are accessed using the class name directly, without needing to create an instance of the class
class MathUtility {
    // Static method to calculate the circumference of a circle
    static calculateCircumference(radius) {
        return 2 * this.PI * radius;
    }
    // Static method to calculate the area of a circle
    static calculateArea(radius) {
        return this.PI * Math.pow(radius, 2);
    }
}
// Static property
MathUtility.PI = 3.14159;
// Accessing static property
console.log("PI:", MathUtility.PI); // Output: PI: 3.14159
// Calling static methods
let radius = 5;
console.log("Circumference:", MathUtility.calculateCircumference(radius)); // Output: Circumference: 31.4159
console.log("Area:", MathUtility.calculateArea(radius)); // Output: Area: 78.53975
