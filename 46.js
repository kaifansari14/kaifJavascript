// Array Method
// How to calculate time in code's

// console.time("start");
// let num = [1,2,3,4,5];

// num.forEach((x) =>{
//     console.log(x);
// });
// console.timeEnd("start");

// 21. map() Method

// man Method 
// Transforms each element and 
// Returns a new array 

// Return Value : New Array
// Chainable : Yes 
// Change Use Case : Creating new arrays

// ex: Creates a new array with modified value and 
// returns in a new array by default 

let numbers = [1,2,3,4,5,]
// forEach
numbers.forEach((x)=> {
    console.log(x);
});

console.log(numbers); // 12345
let final = numbers.map((x)=> x*2);
console.log(final);
console.log(numbers);

// Mutating vs Non-Mutating 

// 1. push
// 2.shift
// 3.unshift
// 4.splice
// 5.sort
// 6.revers
// 7.forEach (with forfully)
// 8.pop

// Non-Mutatig 
// 1.map
// 2.filter
// 3.slice 
// 4.concat 
// 5.reduce
 
let a1 = [10,20,30,40];
let a2 = [50,60];

console.log(a1);

let a3 = a1.concat(a2);
console.log(a3);

console.log();