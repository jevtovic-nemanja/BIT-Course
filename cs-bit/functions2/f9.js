// Write a function to find the median element of array.


function medianArray(array) {
var swap;
var result = [];
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j+1]) {
                swap = array[j];
                array[j] = array[j+1];
                array[j+1] = swap;
            }
        }
    }
    if (array.length % 2 === 0) {
        result[0] = array[array.length/2-1];
        result[1] = array[array.length/2];
    } else {
        result[0] = array[(array.length-1)/2]
    }
    return result;
}


console.log(medianArray([3,1,5,2,4,5]));


function medianArray1(array) {
    var result = [];
    array.sort();
    if (array.length % 2 === 0) {
        result[0] = array[array.length/2-1];
        result[1] = array[array.length/2];
    } else {
        result[0] = array[(array.length-1)/2]
    }
    return result;
    }
    
    
    console.log(medianArray1([3,1,5,2,5]));