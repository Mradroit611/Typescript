// Interface VS Type Aliases 

// -------------------------------------------------------------------------------------------------
// -----Extending an Interface-----
interface Animal {
    name: string;
}
interface Bear extends Animal {
    honey: boolean
} 
const bear:Bear={
    name:"Bear",
    honey: true 
} 
console.log(`${bear.name} : ${bear.honey}`);


// ------Extending a type via intersection------
type Animal1 = {
    name: string;
}
type Bear1 = Animal & {
    honey: boolean
} 
const bear1:Bear1={
    name:"Bear",
    honey: true 
} 
console.log(`${bear1.name} : ${bear1.honey}`);







// ---------------------------------------------------------------------------------------
// Adding new fields to an existing interface 
interface Windoww {
    title: string;
}

interface Windoww{
    ts: number;
}

const windoww : Windoww={
    title: "Hello",
    ts: 400,
}
console.log(`${windoww.title} : ${windoww.ts}`)

// Adding new fields to an existing type 
type Window1 = {
    title: string;
}
// type Window1 = {
//     ts: number;
// }

//the above commented code will throw an error because type does not reopened like interface 
