// Write a program to check if the number is divisible by 3 and 5. If yes print that number.


var num1 = 11;

if ((typeof num1 == "number") && (num1 % 3) === 0 && (num1 % 5) === 0) {
    console.log("Broj " + num1 + " je deljiv i sa 3 i sa 5.");
} else {
    console.log("Broj " + num1 + " nije deljiv i sa 3 i sa 5.");
}