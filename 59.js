// Object Method 

// 1. entries Method 
/*
object.entries() in Javascript is a built-in method that returns an key-value pair from an object
*/
// let person = {
//     fname: "kaif",
//     age: 20,
//     isAlive: true,

// };
// let output = Object.entries(person);
// console.log(output);

// let students = ["suhail", "kaif", "kamran"]
// console.log(students[2]);

// let arr = [
//     ["fname", "suhail"],
//     ["age", 20],
//     ["isAlive", true] // 2
//     // 20        2 1
// ]

// console.log(arr[1][2]);
// console.log(arr.at(1));

// 2nd object.key()
/*
Returns an array of key  (property name) of the object 
*/

// let user = {
//     fname: "kaif",
//     age: 20,
//     city:"hyd",
// };

// console.log(Object.keys(user));

// 3. Object.values()
// Returns an array of the values from the object.


// let user1 = {
//     fname: "kaif",
//     age: "20",
//     city: "hyd",
// };

// console.log(Object.values(user1));

// 4. Object.freeze()

// freeze an object so that :
// You cannot add, remove, or change properties.
// Its makes that object completetly immutable.

let person1 = {
    name : "kutta",
    age : 21,
    isAlive : true,
};
console.log(person1);
// console.log(Object.freeze(person1));
person1.phone = 90876,
person1.age = 56,
delete person1.name 


console.log(Object.isFrozen(person1));
console.log(person1);
