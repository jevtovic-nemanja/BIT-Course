/*Write a for loop that will iterate from 0 to 15. 
For each iteration, it will check if the current number is odd or even, and display a message to the screen. */

function oddEven(num1) {
    var result;
    if ((num1 % 2) === 0) {
        result = num1 + " is even.";
    } else {
        result = num1 + " is odd.";
    }
    return result;
}

for (var i = 0; i <= 15; i++) {
    console.log(oddEven(i));
}