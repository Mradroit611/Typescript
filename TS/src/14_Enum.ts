// // // Enum : we use enum when we want multiple options for single value
// // enum Roles {
// //     user = "user",
// //     admin = "admin"
// // }


// // type LoginDetails = {
// //     name?: string;
// //     email: string;
// //     password: string;
// //     role: Roles
// // }

// // const user1:LoginDetails = {
// //     name: "Sanjay",
// //     email: "sanjay@gmail.com",
// //     password: "asdf",
// //     role: Roles.admin
// // }

// // const user2:LoginDetails = {
// //     name: "Adroit",
// //     email: "sanjay@gmail.com",
// //     password: "asdf",
// //     role: Roles.user
// // }


// // const isAdmin = (user: LoginDetails): string =>{
// //     const {name, role} = user;
// //     return role === "admin" ? `${name} you are ${role}`:`${name} you are ${role}`;
// // }

// // console.log(isAdmin(user1))
// // console.log(isAdmin(user2)) 

enum Browser{
    opera  = 2,
    mozilla = "sanjay",
    chrome = 7 ,
    firfox ,
}
console.log(Browser);
// console.log(Browser[4])


// // enum Browser{
// //     firfox ,
// //     opera = "hello",
// //     mozilla = getVersion("mozilla")*5,
// //     chrome = getVersion("chrome"),
// // }
// // function getVersion(browser_name: string):number{
// //     if(browser_name === "chrome"){
// //         return 100;
// //     }
// //     else if(browser_name === "mozilla"){
// //         return 5;
// //     }
// //     return -1;
// // }
// // console.log(Browser.chrome);
// // console.log(Browser.mozilla);