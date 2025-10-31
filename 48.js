// console.time("time");
// for (i= 1;i<=10;i++){
//     console.log(`5 x${i} = ${5 * i}`);
// }
// console.timeEnd("time");

// //forEach 
// console.time("time");
// const numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.forEach((n) => {
//     console.log(`5 X ${n} =${5*n}`);
// });
// console.timeEnd("time");

// // map method
// const table = numbers.map ((n) =>{
//     return `5 X ${n} = ${5*n}`
// })


// for (let i = 1; i <= 3; i++) {
//     console.log(`Outer Loop`,i);
     
//     for (let j=1; j<= 3; j++){
//         console.log(`     Inner Loop`);

//     }
// }

for (let i = 1; i <=5; i++) {
    let row = "";
    console.log(row,"Outer loop");
    for (let j =1; j <= i; j++){
        row += "* ";
        console.log(row, "Inner loop");
    }
    console.log(row, "answer");
}
