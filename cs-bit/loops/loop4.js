/* Write a program which prints the elements of the following array as single string.
    var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined]; */


var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var sum = "";

for (var i = 0; i < x.length; i++) {
    sum += x[i];
}
    console.log(sum);
