// Scoping In JavaScript
// There are 3 types of scoping in JS

// 1. Block scope
// 2. Function scope 
// 3. global Scope 

// Block Scope 
/* 
{


}

*/

// block Scope              VAR            LET     CONST 
// Inside of Block          ✅             ✅       -
// Outside of Block         ✅             ❌       -

{
    var a = 10;
}
console.log(a)

{
    let a = 10;
}
