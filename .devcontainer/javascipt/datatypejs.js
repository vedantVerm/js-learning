// primitive -> 7  copy krke diya jata hai 

// string , number , Boolean  , null , undefined , symbol --> unique bnanae ke liye symbol use krte hai ------ Bigint 

const IsLogin = false;
const outtemp = null ; 
let useremail ;

const id = Symbol('123');
const anotherid = Symbol('123');

console.log(id==anotherid);

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
myfunction();