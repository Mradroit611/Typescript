// type ANY 
let val: any = 4;
val ++;
val.toUpperCase();
val.map(val); //using the map method on an array
val.foobar=4; //Assigning the value 4 to the property 'foobar' of the object referenced by 'val'



// type UNKNOWN
// if we change the any to unknown type in above code the code will thrown an error 
let val1 : unknown = 4;
if(typeof val1 === "number")  val1++ ;
if(typeof val1 === "string")  val.toUpperCase();;
if(Array.isArray(val1))  val.map(val);
if(
    val1 && typeof val1 === "object" && "foobar" in val1 && typeof val.foobar === "number"
) val.foobar = 4;



//type NEVER 
type User = "standard" | "admin" | "superadmin";

function login(user: User){
    switch(user){
        case "standard":
            return true;
        case "admin":
            return true;
        case "superadmin":   
            return true;
        default:
            const _unreachable:never = user; //if we comment any case then this line will start to throw an error because then it will think that the user holds the left value of User type
            throw 'wrong user type';
    }
}