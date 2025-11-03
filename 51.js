//              Factorial in JS 

// 5! = 5 X 4 X 3 X 2 X 1 == > 120 
// 4! = 4 X 3 X 2 X 1 

// 

 let result = 1; 
for (let i = 5; i > 0; i--) {
    result = result * i;
    result *= i;

    console.log(result);
}

function fact(n) {
    let finalOutput = 1;

    for (let i = n; i >0; i--) {
        finalOutput *= i
    }
    return finalOutput;
}

let answer = fact (4);
console.log(answer);
