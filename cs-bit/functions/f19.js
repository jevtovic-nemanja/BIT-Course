// Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2] 


function lastElement(array, n) {
    var lastElements = [];
    n = n || 1;
    for (var i = 0; i < n; i++) {
        lastElements[i] = array[array.length - n + i];
    }
    return lastElements;
}


console.log(lastElement([7, 9, 0, -2, 4, 5, "A"], 4));


function lastElement1(array, n = 1) {
    return array.slice(-n);
}


console.log(lastElement1([7, 9, 0, -2, 4, 5, "A"], 4));