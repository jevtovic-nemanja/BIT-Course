// Write a function to convert array of strings to array of numbers. Filter out all non number values.


function arrayStringsToArrayNumbers(arrayStrings) {
    var arrayParseInt = [];
    var arrayNumbers = [];
    var NaNCounter = 0;
    for (var i = 0; i < arrayStrings.length; i++) {
        arrayParseInt[i] = parseInt(arrayStrings[i]);
    }
    for (var j = 0; j < arrayParseInt.length; j++) {
        if (!isFinite(arrayParseInt[j])) {
            NaNCounter++;
        } else {
            arrayNumbers[j-NaNCounter] = arrayParseInt[j];
        }
    }
    return arrayNumbers;
}
    

console.log(arrayStringsToArrayNumbers(["a", "b", "13", "c", "85", "d", "11", "201"]));


function arrayStringsToArrayNumbers1(arrayStrings) {
    var arrayParseInt = [];
    arrayStrings.forEach(function (element) {
        arrayParseInt.push(parseInt(element));
    })
    var arrayNumbers = arrayParseInt.filter(function(element) {
        return isFinite(element);
    });
    return arrayNumbers;
}
    

console.log(arrayStringsToArrayNumbers1(["a", "b", "13", "c", "85", "d", "11", "201"]));