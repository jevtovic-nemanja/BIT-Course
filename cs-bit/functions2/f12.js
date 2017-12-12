// Write a function to find the average of the N elements. Make function flexible to receive dynamic number or parameters.


function average() {
    var result;
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    result = sum / arguments.length;
    return result;
}


console.log(average(1,2,3,4,5,6));