"use strict";
class Persons {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi, I am ${this.name} and I'm ${this.age} yrs old, I love ${this.hobbies.join(",")}.`;
    }
}
const persons1 = new Persons("adroit", 12, ["gaming", "travelling"]);
const persons2 = new Persons("sanjay", 12, ["coding", "chess"]);
console.log(persons1);
const persons = []; // saving as an array
persons.push(persons1);
persons.push(persons2);
console.log(persons);
