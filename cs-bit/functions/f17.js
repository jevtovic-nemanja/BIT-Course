// Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]


function filterFalsy(array) {
    var arrayResult = [];
    var positionCounter = 0;
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (!!element === false) {
            positionCounter++;
        } else {
            arrayResult[i-positionCounter] = element;
        }
    }
    return arrayResult;
}


console.log(filterFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]));


function filterFalsy1(array) {
    var result = array.filter(function(element) {
        if (element) {
        return element;
        }
    });
    return result;
}


console.log(filterFalsy1([NaN, 0, 15, false, -22, "", undefined, 47, null]));