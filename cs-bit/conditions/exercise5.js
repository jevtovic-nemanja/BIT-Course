// Write conditional statement to find the sign of product of three numbers. Display result in console with the specified sign.


var num1 = 3;
var num2 = -7;
var num3 = 5;

if ((typeof num1) == "number" && (typeof num2) == "number" && (typeof num3) == "number") {
    if ((num1 * num2) < 0) {
        if (num3 >= 0) {
            console.log("Znak je -.");
        } else {
            console.log("Znak je +.");
        }
    } else {
        if (num3 >= 0) {
            console.log("Znak je +.");
        } else {
            console.log("Znak je -.");
        }
    }
} else {
    console.log("Uneta vrednost nije broj.")
}