// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]


function stringToArray(string) {
    var result = [];
    for (var i = 0; i < string.length; i++) {
        result[i] = string[i];
        if (result[i] === " ") {
            result[i] = "null";
        }
    }
    return result;
}


console.log(stringToArray("random string"));