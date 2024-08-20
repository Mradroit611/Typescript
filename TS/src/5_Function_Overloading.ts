function greett(varr: number, varrr:number): void;
function greett(varr: number, varrr:string): void;
function greett(varr:number, varrr:any): void{
    console.log(varr);
    console.log(varrr);
}
greett(4, 4);
greett(4, "sanjay");
// greett(4, [1,2,4]); //It throws an error because any contains only number or string 



// Complex code of Function Overloading 
function maybe<T>(fnOrP: ()=>T):T | undefined; 
function maybe<T>(fnOrP: Promise<T>):Promise<T |undefined>;
    function maybe<T>(fnOrP: (()=>T) | Promise<T>): T | undefined | Promise<T |undefined> {
    if(typeof fnOrP === "function"){
        try{
            return fnOrP();
        }catch{
            return undefined;
        }
    }
    return fnOrP.catch(() => undefined);
}

const x = maybe(() => "hello");
(async function (){
    const y = await maybe(Promise.resolve ("typescript"));
})