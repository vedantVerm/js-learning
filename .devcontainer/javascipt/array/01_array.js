// array 
const myarr = [0 , 1 , 2 , 3 , 5 ,4 ,6 , 7,8 ,9];
// console.log(myarr[0]);
// shallow copy share the value of the same referance point 
// deep cpy--> donot share the value of the same reference point 

// Array Method----->
// myarr.push(10);
// console.log(myarr)
// shifting the array 
// myarr.unshift(9);
// console.log(myarr);
// myarr.shift();
// console.log(myarr);
// console.log(myarr.indexOf(5));

// console.log(myarr.includes(2));

// join in array method   convert into the string 
const newarr = myarr.join() ; 
console.log(typeof(newarr));


// slice & splice 
console.log("A",myarr);

const myn1 = myarr.slice(1,3);
console.log(myn1);
console.log("B",myarr);

// splice 
// actual array deletion in the splice method 
const myn2 = myarr.splice(1,3);
console.log("C",myarr);
console.log(myn2);