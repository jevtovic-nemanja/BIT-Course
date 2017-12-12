// Write a function to find the maximum and minimum elements. Function returns array.


function maxminElements(array) {
    var arrayParseFloat = [];
    var NaNCounter = 0;
    var arrayNumbers = [];
    var arrayResult = [];
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
    var min = arrayNumbers[0];
    for (var k = 0; k < arrayNumbers.length; k++) {
        if (arrayNumbers[k] >= max) {
            max = arrayNumbers[k];
        }
        if (arrayNumbers[k] <= min) {
            min = arrayNumbers[k];
        }
    }
    arrayResult[0] = max;
    arrayResult[1] = min;
    return arrayResult;
    }


console.log(maxminElements([1, "a", 3, 5, 899, null, false, Infinity, NaN, 11]));


function maxminElements1(array) {
    var arrayFiltered = [];
    var arrayResult = [];
    arrayFiltered = array.filter(function(element) {
        if (typeof element === "number" && isFinite(element))
        return element;
    })
    arrayFiltered.sort();
    arrayResult[0] = arrayFiltered[arrayFiltered.length - 1];
    arrayResult[1] = arrayFiltered[0];
    return arrayResult;
    }


console.log(maxminElements1([1, "a", 3, 5, 899, null, false, Infinity, NaN, 11]));