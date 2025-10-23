// Type conversion 
// Changeing datatype from one type to another 

//Ex : let a = "10" ==>
// convert 10 of string to 10 of number

// There are 2 type of conversions in JS 
//1. Implicit Conversion 
//2. Explicit Conversion 

// 1. Implicit Conversion : ==> Automatic conversions
// 1. Anything  (any datatype) to string 

let result = 2 + "";
console.log(typeof result);

let a = 1 + "hello";
console.log(a);

let b = "2" + 4;
console.log(b);

let c = 2 +4;
console.log(c);

let d = undefined + "3";
console.log(d);

let f = 10 + "kaif this side"
console.log(f);

// Anything to Number use only ( - ,/, *)

let g;
g = "5"-"3";
console.log(g);
 g = "5" * "3";
console.log(g);
g = 10 / "2";
console.log(g);
g = 2 - "hi";
console.log(g); // NaN ==> NOT An Number 

// Anything to Boolean 
// false = 0
//true = 1
let a1 = "5" - false;
let a2 = 2 + true;
let a3 = 0 + false;
console.log(a1);
console.log(a2);
console.log(a3);


 // Null to Number 

 let c1 = 4 + null;
 console.log(typeof c1,c1);
 let c2 = "4" + null;
 
 // Undefine to Null

 let d1 = undefined + 5;
 let d2 = true + undefined;
 console.log(d1);
 console.log(d2);
 
