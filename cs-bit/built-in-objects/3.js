// Write a JavaScript function that returns a passed string with letters in alphabetical order.


function alphabetizeString(string) {
    var array = string.split("").sort();
    var result = array.join("");
    return result;
}

console.log(alphabetizeString("afhasohopwwkpfvwowirwhhfdhjkbfmd"));