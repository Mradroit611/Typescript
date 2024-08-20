// Default Prameter 
const greet = (name:string, id:number = 1):string =>{
    return `Welcome ${name} your employe id is ${id}` ;
};

const emp = greet("sanjay");
console.log(emp);

// Optional Parameter 

const greet2 = (name:string, id?:number):string =>{
    if(id){
    return `Welcome ${name} your employe id is ${id}` ;
    }
    else{
        return `Welcome ${name}`;
    }
};

const empp = greet2("sanjay");
console.log(empp);