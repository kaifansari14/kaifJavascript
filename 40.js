    // Try catch in javascript

    /*
The try ...catch statment in JavaScript is used to handle runtime error -- its lets your code keep running even if something goes wrong 

*/

// Basic Syntex

// try {
    
// } catch (error) {
//     console.log(error);
// }

// let a = 10;
// console.log(b);

try {
    let a = 10;
    console.log(b);
} catch (error) {
    console.log("Bhai error agaya");
    console.log(error.name, error.message );
}