// Write a function to find all the numbers greater than the average.


function greaterThanAverage() {
    var argumentsAverage;
    var result = "";
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    argumentsAverage = sum / arguments.length;
    for (var j = 0; j < arguments.length; j++) {
        if (arguments[j] > argumentsAverage) {
            result += arguments[j] + " ";
        }
    }
    return result;
}


console.log(greaterThanAverage(1,2,3,4,5,6));