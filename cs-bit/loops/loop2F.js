/* Write a program to sum the multiples of 3 and 5 under 1000. */


function add() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] += arguments[i];
    }
    return result;
}

function modulo() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] %= arguments[i];
    }
    return result;
}

var sum = 0;

for (var i = 0; i < 1000; i ++) {
    if (modulo(i,15) === 0) {
        sum = add(sum,i);
    } 
}
    console.log(sum);