/* Write a program that show text representation of day in a week for number input from 1 to 7.
All other cases output message that input must be number between 1 and 7. 
For input 1 it should output “Monday”
For input 10 should output “Input must be number between 1 and 7” */


var num1 = 1;

switch (num1) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Input must be number between 1 and 7.");
        break;
}