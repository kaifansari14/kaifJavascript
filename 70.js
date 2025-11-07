// Promises in JS

/*
A Promise is an object that reporesents the eventual completion or failure of an asynchronous opeation 

"I'll fetch the data (pending)... if it works, I'll resolve it ✅, if it fails, I'll reject it ❌. 
*/

// const Promises = new Promise ((resolve, reject)=> {
//     let success = true;
//     if (success) {
//         resolve("Task Completed");
//     } else {
//         reject ("Task Failed");
//     }
// });

// console.log(Promises);

// //  V1 
// function timerCallback(callback,seconds) {
//     console.log(` Waiting for ${seconds} seconds...`);
//     setTimeout(()=> {
//         callback(`✅ Done after ${seconds} secondes!`);
//     }, seconds * 1000);
// }

// timerCallback((msg) => {
//     console.log(msg);
// }, 2);

// V2 promises 

function timerPromise (secondes) {
    return new Promise((resolve, reject) => {
        if (secondes <0){
            reject("❌ Invalid time!");
        } else {
            setTimeout(()=> {
                resolve(`✅ Done after ${secondes} secondes!`);
            }, secondes * 1000);
        }
    });
}

// timerPromise(2)
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err))


// V3 is ==>promise chainning 

// timerPromise(1)
//     .then((msg)=>{
//         console.log(msg);
//         return timerPromise(2);
//     }).then((msg) => {
//         console.log(msg);
//         return timerPromise(3);
//     })
//     .then ((msg) => console.log(msg))
//     .catch((err)=> console.log(err))
//     .finally(() => console.log("🏁 All timers done!"));

// V4 promise.all()
// Run all timers together and wait for all to finish.

// Promise.all([timerPromise(1), timerPromise(2), timerPromise(3)])
//   .then((results)=> console.log("✅ All done:", results))
//   .catch((err)=> console.log(err));

// V5 ==> Promise.race()
// run all timer together, but omly get the first one finishes.

Promise.race([timerPromise(1), timerPromise(2), timerPromise(3)])
 .then((result)=> console.log("🏁 First finished:", result))
 .catch((err)=> console.log(err));


// V6 ==> async/ await (Mordern Syntax)

 async function finalRunner(){
    try {
        let timer1 = await timerPromise(3);
        console.log(timer1);

        let timer2 = await timerPromise(2);
        console.log(timer2);

        let timer3 = await timerPromise(1);
        console.log(timer3);
    } catch (error) {
        console.log(error);
    }
}

finalRunner();