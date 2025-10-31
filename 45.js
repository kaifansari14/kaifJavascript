/*
1. every () Method 

checks is every element in the array passes a test (retuens true/ fales ).

RETURNS : true if all elements pass the condition, otherwise fales

cont number = [1,4,6,8];
*/

// let nums = [2,4,6,8,10];

// let check = nums.every((x) => x > 0);

// function test(x){
//     return x > 0;
// }
//console.log(check);
// >0

/*
2. find () Method

returns the first element that satisfies a condition.

✅ returns: The element itself, or undefined if mot found.
*/

// let num = [2,4,6,8,10];

// let check1 = num.find((y)=> y > 6);
// console.log(check1);


/*
 19. findIndex()
 Return the index of the first element that satisfies a condition.

 ✅ returns: index number, or -1 if not found.
*/

// let num1 = [3,5,7,8,9,0,1];

// let check2 = num1.findIndex((k)=> k< 3);
// console.log(check2);

/*
 20. forEach () Method

 // purpose: Executea Function for each element 
 // return Value : undefined  
 // Chainable : No
 // Change Original Array : No
 // Common Use : Logging,Saving Data 

 // ex: forEach just: Just loops - doesn't  return anything.
*/

let numbers = [1,2,3,4,5];

console.log(numbers);
numbers.forEach((b) =>{
    console.log(b * 4);
});
console.log(numbers);

let names = [" kaif", "saboor","rayyan","kamran"];

names.forEach((x) =>{
    console.log(x);
})
