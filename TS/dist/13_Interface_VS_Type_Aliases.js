"use strict";
// Interface VS Type Aliases 
const bear = {
    name: "Bear",
    honey: true
};
console.log(`${bear.name} : ${bear.honey}`);
const bear1 = {
    name: "Bear",
    honey: true
};
console.log(`${bear1.name} : ${bear1.honey}`);
const windoww = {
    title: "Hello",
    ts: 400,
};
console.log(`${windoww.title} : ${windoww.ts}`);
// type Window1 = {
//     ts: number;
// }
//the above commented code will throw an error because type does not reopened like interface 
