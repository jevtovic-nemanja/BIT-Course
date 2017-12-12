/* Write a function to check whether an `input` is a string or not.

"My random string" -> true
12 -> false */


function checkIfString(input) {
    return typeof input === "string";
}


console.log(checkIfString(3));