// Write a program to check if the variable is a number and if it’s a number check if is divisible by 2. If yes print result if not show “X”


var a = 10;

if ((typeof a) != "number" || (a % 2) !== 0) {
    console.log("X");
} else {
    var result = a/2;
    console.log(a + " /2 = " + result);
}