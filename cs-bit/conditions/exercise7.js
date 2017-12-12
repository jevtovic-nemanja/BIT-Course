// Write a conditional statement to find the largest of five numbers. Display result in console.


var num1 = 2;
var num2 = 3;
var num3 = 8;
var num4 = -7;
var num5 = -4;

if ((typeof num1) == "number" && (typeof num2) == "number" && (typeof num3) == "number" && (typeof num4) == "number" && (typeof num5) == "number") {
    var higherNumber12 = (num1 >= num2) ? num1 : num2;
    var higherNumber34 = (num3 >= num4) ? num3 : num4;
    var higherNumber1234 = (higherNumber12 >= higherNumber34) ? higherNumber12 : higherNumber34;
    var result = (higherNumber1234 >= num5) ? higherNumber1234 : num5;
    console.log(result);
} else {
    console.log("Uneta vrednost nije broj.")
}