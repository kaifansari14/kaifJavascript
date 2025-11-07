

function greet (a,b) {
    console.log("Hello" + a);
    b(); // afterGreeting ()
}

function afterGreeting () {
    console.log("Welcome to Code.live!");
}
