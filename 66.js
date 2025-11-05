// Number Method

let a = -2 / 0;
console.log(a);  //- Infinity 

// 1. ParseFlote () 
// They are built -in JavaScript functions that convert string into numbers. 

// Convert to decimeal number
// String to Number 

console.log(parseFloat("43.5")); // 43.5
console.log(parseFloat("99.43cm23")); // 99.43
console.log(parseFloat("cm 99.23")); // NaN
console.log(parseFloat("a12b3c"));  // NaN


  // 2. ParseInt...converts to number
  // we use parseInt for number systems. 

console.log(parseInt("1111", 2)); // 15
console.log(parseInt("1010", 2)); // 
console.log(parseInt("1000", 2));
console.log(parseInt("1100011", 2)); 
console.log(parseInt("1100011",2));

console.log(parseInt("45.4543"));

// 3. parsetoFixed ()
// Convert number tostring and round off the decimal part & gives approximat value.

let num = 57.77583;

console.log(num.toFixed());  // 58- > rounded off, no fractional
console.log(num.toFixed(1)); // 
console.log(num.toFixed(7));
console.log(num.toFixed(3));


// 4. toLocaleString () :-


/* 
toLocaleString() is a Number Method that formats a number according to a specific locale (country/language) or style like adding commas,  currency, or percetage.
*/

// syntax ==> number.toLocaleString([locales], [options])

/* 
locales -> optional srting like "en-US", "hi-IN", "de-DE", etc.
(defines -> )
*/






let num2 = 1234567.89;

console.log(num2.toLocaleString("en-US"));  
console.log(num2.toLocaleString("de-DE"));
console.log(num2.toLocaleString("hi-HI"));

let price = 2500;
console.log(price.toLocaleString("en-US", {style: "currency",currency: "USD"}));
console.log(price.toLocaleString("hi-HI", {style: "currency",currency: "INR"}));
console.log(price.toLocaleString("ja-JP", {style: "currency",currency: "JYP"}));
console.log(price.toLocaleString("ar-SA", {style: "currency",currency: "SAR"}));
console.log(price.toLocaleString("hi-IN", {style: "percent"}));
