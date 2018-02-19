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
    return arrayStrings.map(string => parseFloat(string)).filter(num => num === num);
}
    

console.log(arrayStringsToArrayNumbers1(["a", "b", "13", "c", "85", "d", "11", "201"]));