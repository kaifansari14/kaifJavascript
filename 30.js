            // what is a switch statement?
/* 
a switch statment is used to compare one value one against multiple posssible caseas.
it's often cleaner that writing mulitpil if...else if conditilons. */ 

/*{
    switch(expression)
{
    case value1:
        // Code block if expression === value1
        brake;

    case value2;
        // Code    block if expression === value2
        brake ;


}}
        */

let day = "Decomber"
switch(day) {
    case "Sunday" :
        console.log("It's a Sunday");
        break;
    case "Monday" :
        console.log("It's a Monday");
        break;
    case "Tuesday":
        console.log("It's a Tuesday");
        break;
    case "Saturday" :
        console.log("It's a Saturday");
        break;
    default:
        console.log("Please add correct day");
        break;
}
 