/* Write a program to compute the sum and product of an array of integers */


function add() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] += arguments[i];
    }
    return result;
}

function multiply() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] *= arguments[i];
    }
    return result;
}

var arr = [2, 5, 8, 11];

var sum = 0;
var product = 1;

for (var i = 0; i < arr.length; i++) {
    sum = add(sum,arr[i]);
    product = multiply(product, arr[i]);
}
    console.log("The sum is ", sum);
    console.log("The product is ", product);