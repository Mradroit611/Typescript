type Person = {
    name: string;
    age: number;
    contact?: number;
    isStudent: boolean;
    address: {city:string; country:string};
}

const person : Person ={
    name: "Sanjay",
    age: 22,
    isStudent: true,
    address: {
        city: "Delhi",
        country: "India"
    }
}

const person2 : Person ={
    name: "Adroit",
    age: 22,
    isStudent: true,
    address: {
        city: "Delhi",
        country: "India"
    }
}


const greeting = (person:Person) =>{
    return `Welcome ${person.name} you are an ${person.address.country}`
}

console.log(greeting(person))