/* Write a program that for number input from 1 to 7 representing day in a week shows output if that day is a weekday or weekend.
All other cases output message that input must be number between 1 and 7.
		For input 2 outputs “It’s weekday”
For input 6 outputs “It’s weekend”
For input 12 outputs “Input must be number between 1 and 7” */


var num1 = 5;

switch (num1) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Input must be number between 1 and 7.");
        break;
}