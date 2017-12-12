// Write a function that combines two arrays by alternatingly taking elements

// [a,b,c], [1,2,3] -> [a,1,b,2,c,3]


function alternateArrays(array1, array2) {
    var arrayResults = [];
    var counter1 = 0;
    var counter2 = 0;
    for (var i = 0; i <= (array1.length + array2.length); i++) {
        if (i % 2 === 0) {
            arrayResults[i] = array1[counter1];
            counter1++;
        } else {
            arrayResults[i] = array2[counter2];
            counter2++;
        }
    }
    return arrayResults;
}


console.log(alternateArrays(["a", "b", "c"], [1, 2, 3, 4]));


function alternateArrays1(array1, array2) {
    var arrayResults = [];
    var counter = 0;
    for (var i = 0; i < array1.length + array2.length + counter; i++) {
        if (i % 2 === 0) {
            arrayResults.push(array1.shift());
            counter++;
        } else {
            arrayResults.push(array2.shift());
            counter++;
        }
    }
    return arrayResults;
}


console.log(alternateArrays1(["a", "b", "c"], [1, 2, 3, 4]));