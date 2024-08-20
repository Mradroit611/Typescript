"use strict";
class Personsdata {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi, I am ${this.name} and I'm ${this.age} yrs old, I love ${this.hobbies.join(",")}.`;
    }
}
class Students extends Personsdata {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        // return `Hi, I am ${this.name} and I'm ${this.age} yrs old, I'm in grade ${this.grade}. I love ${this.hobbies.join(",")}.`;
        return `${super.introduce()}, I'm in grade ${this.grade}.`;
    }
}
const personsdata1 = new Personsdata("adroit", 12, ["gaming", "travelling"]);
const student1 = new Students("sanjay", 12, ["coding", "chess"], 10);
console.log(personsdata1);
console.log(student1.introduce());
