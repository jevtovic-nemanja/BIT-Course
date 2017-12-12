// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"


function insertString(string, insertion, n) {
    var newStringBeginning = "";
    var newStringEnding = "";
    var newString = "";
    var counter = 0;
    n = n || 1;
    for (var i = 0; i < n - 1; i++) {
        newStringBeginning += string[i];
    }
    for (var j = 0; j < (string.length - newStringBeginning.length); j++) {
        newStringEnding += string[n - 1 + counter];
        counter++;
    }
    newString += newStringBeginning + insertion + newStringEnding;
    return newString;
}


console.log(insertString("My random string", "JS ", 6));


function insertString1(string, insertion, n) {
    n = n || 1;
    var result = string.slice(0,n-1) + insertion + string.slice(n-1,string.length);
    return result;
}


console.log(insertString1("My random string", "JS ", 6));
