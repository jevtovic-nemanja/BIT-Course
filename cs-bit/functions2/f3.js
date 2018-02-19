// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]


function rotateArray(array, k) {
    var arrayResults = [];
    for (var i = 0; i < array.length - k; i++) {
        arrayResults[i] = array[k + i];
    }
    for (var j = array.length - k; j < array.length; j++) {
        arrayResults[j] = array[j - array.length + k];
    }
    return arrayResults;
}


console.log(rotateArray([1, 2, 3, 4, 5, 6, 1, 2], 5));


function rotateArray1(array, k) {
    const end = array.slice(0, k);
    const start = array.slice(k, array.length);
    return [...start, ...end];
}


console.log(rotateArray1([1, 2, 3, 4, 5, 6, 1, 2], 5));