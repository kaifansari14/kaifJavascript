// Hoisting

let a = 10;
console.log(a);

function Hello(){
    console.log("Hello");
}
Hello();
Hello();

let hey = () => {
    console.log("kaif");
}
hey();
