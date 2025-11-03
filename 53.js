// Object 

let myDetails = {
    myName : "khaja kaif ansari",
    myAge: 10,
    //myNumber: 9849014287,
    myBankbalance: 519.10,
    myAddress : 'Hyderabad',
    isAlive: true,
    isSleeping : null,
    isAwake: undefined
};
console.log(myDetails);

myDetails.myAge = 20;
console.log(myDetails);

myDetails.mobile = 9849008817;
console.log(myDetails);

delete myDetails.myBankbalance;
console.log(myDetails);

