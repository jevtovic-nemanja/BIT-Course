// Write a program that compares two numbers and display the larger. Result display in console.


var num1 = -2;
var num2 = 5;

if ((typeof num1) == "number" && (typeof num2) == "number") {
    if (num1 > num2) {
        console.log("Veci je broj " + num1 + ".");
    } else if (num2 > num1) {
        console.log("Veci je broj " + num2 + ".");
    } else {
        console.log("Brojevi su jednaki.");
    }
} else {
        console.log("Uneta vrednost nije broj.")
    }