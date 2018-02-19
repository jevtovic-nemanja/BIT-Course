// // Write a function to find return the first, middle and last element of an array if the array has odd number of elements.
// If number of elements is even return just first and last. In other casses input array should be returned.


function firstMiddleLastElement(array) {
    var arrayResults = [];
    if (array.length === 0 || array.length === 1) {
        arrayResults = array;
    } else if (array.length % 2 !== 0) {
        arrayResults[0] = array[0];
        arrayResults[1] = array[(array.length - 1) / 2];
        arrayResults[2] = array[array.length - 1];
    } else if (array.length % 2 === 0) {
        arrayResults[0] = array[0];
        arrayResults[1] = array[array.length - 1];
    }
    return arrayResults;
}


console.log(firstMiddleLastElement([1, 2, 3, 4, 5, 6, 7]));


function firstMiddleLastElement1(array) {
    const results = [];
    array.length % 2 !== 0
        ? results.push(array[0], array[(array.length - 1) / 2], array[array.length - 1])
        : results.push(array[0],  array[array.length - 1]);
    return results;
}


console.log(firstMiddleLastElement1([1, 2, 3, 4, 5, 6, 7, 8, 9,]));