
           // every() Method

// Purpose: Check if all array elements pass a test.

// Syntax: arr.every(fn(element, index, array), thisArg)

// Return: true if every callback returns true; otherwise false.

// Example: [2,4,6].every(n => n%2===0) → true


// find() Method

// Purpose: Return the first element that satisfies a test.

// Syntax: arr.find(fn(element, index, array), thisArg)

// Return: The element found or undefined if none.

// Example: [1,5,10].find(n => n>4) → 5


// findIndex() Method

// Purpose: Return the index of the first element that matches a test.

// Syntax: arr.findIndex(fn(element, index, array), thisArg)

// Return: Index (0..n) or -1 if none.

// Example: [1,5,10].findIndex(n => n>4) → 1



// forEach() Method

// Purpose: Run a function for each element (side effects).

// Syntax: arr.forEach(fn(element, index, array), thisArg)

// Return: undefined (does not build a new array).

// Example: ['a','b'].forEach((x,i)=>console.log(i,x))



// map() Method

// Purpose: Transform every element into a new array.

// Syntax: const newArr = arr.map(fn(element, index, array), thisArg)

// Return: New array of transformed values (same length).

// Example: [1,2,3].map(n=>n*2) → [2,4,6]



// reduce() Method

// Purpose: Combine elements into one value (left → right).

// Syntax: arr.reduce(fn(accumulator, current, index, array), initialValue)

// Return: Single accumulated value.

// Example: [1,2,3].reduce((a,b)=>a+b,0) → 6



// reduceRight() Method

// Purpose: Like reduce() but processes elements right → left.

// Syntax: arr.reduceRight(fn(accumulator, current, index, array), initialValue)

// Return: Single accumulated value (order reversed).

// Example: ['a','b','c'].reduceRight((a,b)=>a+b) → 'cba'