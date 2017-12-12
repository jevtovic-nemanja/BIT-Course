/* Write a program that for number input from 1 to 12 representing month in a year shows output 
whats the season. 
All cases diferent from 1-12 output message that input must be number between 1 and 12. */


var num1 = 1;

switch (num1) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Input must be number between 1 and 12.");
        break;
}