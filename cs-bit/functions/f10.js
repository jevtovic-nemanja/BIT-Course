// Write a function which replaces spaces in a string with provided separator. If separator is not provided use “-” (dash) as default separator.

//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"


function replaceSpace(string, separator) {
    var result = "";
    for (i = 0; i < string.length; i++) {
        separator = separator || "-";
        if (string[i] === " ") {
                result += separator;
        } else {
            result += string[i];
        }
    }
    return result;
}


console.log(replaceSpace("My random string"));


function replaceSpace1(string, separator) {
    separator = separator || "-";
    var result = string.split(" ").join(separator);
    return result;
}


console.log(replaceSpace1("My random string", "x"));