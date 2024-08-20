 class Persons{
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduce(): string {
        return `Hi, I am ${this.name} and I'm ${this.age} yrs old, I love ${this.hobbies.join(",")}.`;
        
    }
    
}


const persons1: Persons = new Persons("adroit", 12, ["gaming", "travelling"]);   
const persons2: Persons = new Persons("sanjay", 12, ["coding", "chess"]);   

console.log(persons1);



const persons: Persons[] = []; // saving as an array
persons.push(persons1);
persons.push(persons2);
console.log(persons);