// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]


function arrayToString(array) {
    var string= "";
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) && typeof(array[i]) !== "object" && (typeof array[i]) !== "undefined") {
            string += array[i];
        }
    }
    return string;
}


console.log(arrayToString([NaN, 0, 15, false, -22, '', undefined, 47, null, Infinity]));


function arrayToString1(array) {
    return array.filter(item => isFinite(item)).join("");
}


console.log(arrayToString1([NaN, 0, 15, false, -22, '', undefined, 47, null, Infinity]));