// If else statement

/*

If...else is used to run code conditionally - only
when a specific expression evaluates to true.

// There are 3 Types of if else statement 

//1.if statement 
//2.if ...else statement 
//3. if ...else if ...else 

    */
    
    /*let age = 20;
    // If logic to check the age to 
if(age >= 18) {
  console.log("You can vote");
} else{  
 console.log("You cannot vote");
}
*/







// if .....else if ....else
// if ===> 1st condition     
// else if ===> 2nd to nyh condition
// else ===> false condition

// I want to make a program
// Based on number i want to assign grade
// 90 - 100 ==> A+
// 80 - 90 ==> A
// 70 - 80 ==> B+ 
// 60 - 50 ==> C




let marks = 60

if (marks >= 90)  {
    console.log("A+");
} else if (marks >= 80) {
    console.log("A");
} else if (marks >= 70) {
    console.log("B+");
} else if (marks >= 60) {
    console.log("B");
} else if (marks >= 50) {
    console.log("C");
} else {
    console.log("You Failed");
}




 // If Temp is greater than 35 ---> its hot 
 // if Temp is greater than 25 ---> its nice and normal 

 let Temp = 50;
 if (Temp >= 35){
    console.log("Its hot");
 } else if (Temp >= 25){
    console.log("Its Normal");
 } else {
    console.log("Its cold");
 }
