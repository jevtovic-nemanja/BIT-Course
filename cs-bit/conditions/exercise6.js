// Write a conditional statement to sort three numbers.


var num1 = 0;
var num2 = -1;
var num3 = 5;

if ((typeof num1) == "number" && (typeof num2) == "number" && (typeof num3) == "number") {
    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3) {
            console.log(num1, num2, num3);
        } else {
            console.log(num1, num3, num2);
        }
    } else if (num2 >= num1 && num2 >= num3) {
        if (num1 >= num3) {
            console.log(num2, num1, num3);
        } else {
            console.log(num2, num3, num1);
        }
    } else if (num3 >= num1 && num3 >= num2) {
        if (num1 >= num2) {
            console.log(num3, num1, num2);
        } else {
            console.log(num3, num2, num1);
        }
    }
} else {
    console.log("Uneta vrednost nije broj.")
}