/* Write a program which prints the elements of the following array as single string.
    var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined]; */


function add() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] += arguments[i];
    }
    return result;
}


var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var sum = "";

for (var i = 0; i < x.length; i++) {
    sum = add(sum, x[i]);
}
    console.log(sum);
