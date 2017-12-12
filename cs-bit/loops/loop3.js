/* Write a program to compute the sum and product of an array of integers */


var arr = [2, 5, 8, 11];

var sum = 0;
var product = 1;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
}
    console.log("The sum is " + sum + ".");
    console.log("The product is " + product + ".");