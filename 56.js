//              for in loop

/*
👉 Used to loop through the properties (keys) of an object or values 
*/
let myDetails = {
    fullName: "kaif",
    age: 10,
    isAlive: true,
    isSleeping: null,
    isAwake : undefined,
};

for (let keys in myDetails) {
    console.log(keys,myDetails [keys]); 
}
