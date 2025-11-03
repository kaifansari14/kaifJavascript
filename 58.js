// 25. Reduce Method 
/* 
The reduce () Method runs a function on each element of an array to reduce it to a single value (like sum, prodects )


// Reduce Method has 3 parameters 
1. accumulator => stores the previous step
2. currentValue ==> current array element 
3. initialValue ==> starting Value
*/

let numbers =[10,20,30,40,50];

let total = numbers.reduce((acc, cur) =>{
    return acc + cur;
},0);

console.log(total);



let numbers1 =[10,20,30,40,50];

let total1 = numbers1.reduce((acc, cur) =>{
    return acc * cur;
},1);

console.log(total1);



let numbers2 =[10,20,30,40,50];
let str = ["H", "E", "L", "L", "O"];

let total2 = str.reduce((acc, cur) =>{
    return acc + cur;
});

console.log(total2); 
