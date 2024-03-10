// primitive -> 7  copy krke diya jata hai 

// string , number , Boolean  , null , undefined , symbol --> unique bnanae ke liye symbol use krte hai ------ Bigint 

const IsLogin = false;
const outtemp = null ; 
let useremail ;

const id = Symbol('123');
const anotherid = Symbol('123');

// console.log(id==anotherid);

// referened type --( Non primitive) 

// array , object , function 

const hero = ["shaktiman", "naagraj", "doga"];

let myobj = {
    name  : "vedant",
    age : 22,
} 
// curly brases ke anther object hota hai 
// console.log(myobj);


const myfunction = function(){
    console.log("hello world !");
}
// myfunction();

// ************************ MEMORY ****************************************

// stack(primitive) heap(Non-Primitive)
// let mytoyname = "Dinasour";

// let anothername = mytoyname;

// anothername = "penginuean";

// console.log(mytoyname);
// console.log(anothername);



// primitive datat-type

let userone = {
    email : "vermavedant063@gamil.com", 
    upi : "user@upl",
}
console.log(userone);

let usertwo = {
    email : "vermavedant035@gmail.com",
}
console.log(userone.email);
console.log(usertwo.email);


