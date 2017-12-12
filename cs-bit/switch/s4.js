/* 
Write a program that for number input from 1 to 12 representing month in a year shows that month name.
All other cases output message that input must be number between 1 and 12. 
		For input 2 outputs “February”
For input 6 outputs “June”
For input 13 outputs “Input must be number between 1 and 12” */


var num1 = 1;

switch (num1) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Input must be number between 1 and 12.");
}