const marvel_heros = ["thor", 'ironman', "spiderman"];
const dc_heros = ["superman", 'flash', "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros);


// const  concat1  = marvel_heros.concat(dc_heros);
// // recive a new array 

// console.log(concat1)

// spread operator to concat the value of the of the no /string 
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] ;
// to flat the array we are using the this method 

const real_array = another_array.flat(Infinity);

// console.log(real_array);

// check whether it is array or not 
console.log(Array.isArray("Vedant"));
// creating an array 
console.log(Array.from("vedant"))

console.log(Array.from({name : "vedant"})); // interstating situation key value situation


let score1 = 100 ; 
let score2 = 200 ; 
let score3 = 300 ; 
console.log(Array.of(score1, score2, score3));



