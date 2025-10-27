// 5. Arrow Functions 

function sayHello()
{
    console.log("Hello");
}
sayHello();
let add = function (num1,num2){
    return num1 + num2;
}

let total = add(10,5);
console.log(total); // 15 

// ES6 2015
let add1 = (num1,num2) => {
    return num1 + num2 
}

let total1 = add1 (10,20);
console.log(total1)
