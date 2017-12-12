// Write a function to find the element that occurs most frequently.


function mostFrequentItem(array) {
    var counter = 0;
    var arrayCounters = [];
    var result;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                counter++;
            }
        }
        arrayCounters[i] = counter;
        counter = 0;
    }
    var highestCounter = arrayCounters[0];
    var index;
    for (var k = 0; k < arrayCounters.length; k++) {
        if (arrayCounters[k] >= highestCounter) {
            highestCounter = arrayCounters[k];
            index = k;
        }
    }
    result = array[index];
    return result;
}

console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));