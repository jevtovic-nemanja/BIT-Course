// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.


function maximumElement(array) {
    var arrayParseFloat = [];
    var NaNCounter = 0;
    var arrayNumbers = [];
    for (var i = 0; i < array.length; i++) {
        arrayParseFloat[i] = parseFloat(array[i]);
    }
    for (var j = 0; j < arrayParseFloat.length; j++) {
        if (isNaN(arrayParseFloat[j]) || !isFinite(arrayParseFloat[j])) {
            NaNCounter++;
        } else {
            arrayNumbers[j-NaNCounter] = arrayParseFloat[j];
        }
    }
    var max = arrayNumbers[0];
    for (var k = 0; k < arrayNumbers.length; k++) {
        if (arrayNumbers[k] >= max) {
            max = arrayNumbers[k];
        }
    }
    return max;
}


console.log(maximumElement([1, "a", 3, 5, 899, null, false, Infinity, NaN, 11]));


function maximumElement1(array) {
    const filteredArray = array.filter(item => isFinite(parseFloat(item)));
    return Math.max(...filteredArray);
}


console.log(maximumElement1([1, "a", 3, 5, 899, null, false, Infinity, NaN, 11]));