// Write a program to check if the number is divisible by 2. If yes print even, if not print odd.


var num1 = 10;

if ((typeof num1) == "number") {
    if ((num1 % 2) === 0) {
        console.log("Broj " + num1 + " je paran.");
    } else {
    console.log("Broj " + num1 + " je neparan.");
}
} else {
    console.log("Uneta vrednost nije broj.");
}