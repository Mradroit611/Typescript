class Personsdata{
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

class Students extends Personsdata{ //inherit the properperties of class Personsdata in class Students
    grade: number;
    
    constructor(name: string, age: number, hobbies: string[], grade: number){
        super(name, age, hobbies);
        this.grade = grade;
    }

    introduce(): string {
        // return `Hi, I am ${this.name} and I'm ${this.age} yrs old, I'm in grade ${this.grade}. I love ${this.hobbies.join(",")}.`;
        return `${super.introduce()}, I'm in grade ${this.grade}.`
    }
}

const personsdata1: Personsdata = new Personsdata("adroit", 12, ["gaming", "travelling"]);   
const student1: Students = new Students("sanjay", 12, ["coding", "chess"], 10);   
console.log(personsdata1);
console.log(student1.introduce());

