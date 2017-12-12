/* Write a program to that will iterate from 0 to 10 and display squares of numbers. */


function square (num1) {
    var result = num1 * num1;
    return result;
}

for (var i = 0; i <= 10; i++) {
    console.log(square(i));
}