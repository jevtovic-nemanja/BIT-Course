/* Write a program to output the sum of squares of a first 20 numbers.  */


function add() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] += arguments[i];
    }
    return result;
}

function square(num1) {
    var result = num1 * num1;
    return result;
}

var result = 0;

for (var i = 1; i <= 20; i++) {
    result = add(result,square(i));
}   
    console.log(result);