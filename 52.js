//      Factorial with Recursion

// function Factorial(a) {
//   if (a == 0) {
//     return 0, console.log(0);
//   }
//   if (a == 1) {
//     return 1;
//     console.log();
//   }
//   return a * Factorial(a - 1);
// }
// let output = Factorial(5);
// console.log(output);

function Factorial (a) {
    if (a == 0) return 1;
    return a * Factorial(a - 1);
}

let output = Factorial(10);

console.log(output);