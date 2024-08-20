"use strict";
class Persons {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi, I am ${this.name} and I'm ${this.age} yrs old, I love ${this.hobbies.join(",")}.`;
    }
}
class Students extends Persons {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        // return `Hi, I am ${this.name} and I'm ${this.age} yrs old, I'm in grade ${this.grade}. I love ${this.hobbies.join(",")}.`;
        return `${super.introduce()}, I'm in grade ${this.grade}.`;
    }
}
const persons1 = new Persons("adroit", 12, ["gaming", "travelling"]);
const student1 = new Students("sanjay", 12, ["coding", "chess"], 10);
console.log(persons1);
console.log(student1.introduce());
