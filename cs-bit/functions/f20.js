// Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]


function createArray(elements, content) {
    var array = [];
    if (typeof content === "undefined") {
        content = null;
    }
    for (var i = 0; i < elements; i++) {
        array[i] = content;  
    }
    return array;
}


console.log(createArray(4,0));


function createArray1(elements, content) {
    if (typeof content === "undefined") {
        content = null;
    }
    var result = Array(elements);
    result = result.fill(content);
    return result;
}


console.log(createArray1(4,0));