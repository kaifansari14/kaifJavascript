// Recursion is when a function calls itself to solve a smaller version of the same problem untill it reaches a base 



// function hello() {
//     console.log("Hello CFI");
//     hello();
// }
// hello ();

// 10th line hello ()
// 5th function hello 
// 6th ==> Hello CFi 
// 5th function hello 
// 6th  ==> hello CFI \

function call (num){
    console.log("num value =", num); // 10
    if (num == 3) return console.log("Stopped");

    console.log("calling the function");
    call (num - 1);
}
call (5);

// num == 10 
// num == 10