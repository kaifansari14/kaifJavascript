// 1. Simple function
function sayHello (){
    console.log("hi sir ");
    console.log("hi kaif");
    console.log("hey wassup");
}

sayHello()
sayHello()
// Example
function orderPizza(){
    console.log("order online");
    console.log("it and make your order");
    console.log("know pay the money");
}
orderPizza()
orderPizza()


// 2. Function with parameters
// Parameters ==> Passed as variables
// Arguments ==> Passed as values

let a = 10;
let b = 20;

function sayKaif(a, b, c){
     console.log(a + b + c);
 }

sayKaif(10, 20, 5);

// a,b are Parametrs
// 10,20 are Arguments

// function whoAmI(fullName){
//     console.log(`I am ${fullName} from CFI `);
// }
// whoAmI("kaif");

              //  3. return function
function whoAmI(fullName, age ,collage){
    console.log(`I am ${fullName} and my ${age} is and my ${collage} im develpoer`);
}
whoAmI("kaif", "19", "CFI");



function sumNumbers(a,b){
    return a + b 
}
let final1 = sumNumbers(2,5);
console.log(final1 + 2);  // undefine

function sum (a,b) {
    let x = a + b ;
    console.log(x);
    return x;
}

let total = sum(2, 3);
console.log(total * 2);

// NOte : 
// 1. Use return to pass the value
// 2. U cannot write anything after return



           4. // Function Expressions
// A Function can also be stored in a variables


function mul(x,y){
    return x * y;
} 
let final2 = mul(2 ,4) 
console.log(final2 * 2);
// Function Expression 
let mul1 = function (x,y)
{
    return x * y;
}

let final3 = mul1(2, 5);
console.log(final3 * 2);     

                // 5. Arrow Functions 

function sayHello()
{
    console.log("Hello");
}
sayHello();
let add = function (num1,num2){
    return num1 + num2;
}

let total1 = add(10,5);
console.log(total1); // 15 

// ES6 2015
let add1 = (num1,num2) => {
    return num1 + num2 
}

let total2 = add1 (10,20);
console.log(total2)


