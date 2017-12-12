// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

// Use literal notation, private and immediate functions.


// Using immediate functions.


function insertString(string, insertion, n) {
    n = n || 1;
    var newString = (
        function () {
            var output = "";
            var stringBeginning = (
                function () {
                    var output = "";
                    for (var i = 0; i < n - 1; i++) {
                        output += string[i];
                    }
                    return output;
                }
            )();
            var stringEnding = (
                function () {
                    var output = "";
                    for (var i = n - 1; i < string.length; i++) {
                        output += string[i];
                    }
                    return output;
                }
            )();
            output += stringBeginning + insertion + stringEnding;
            return output;
        }
    )();
    return newString;
}


// Using literal notation, then invoking functions.

function insertString(string, insertion, n) {
    n = n || 1;
    var newString = function () {
        var output = "";
        var stringBeginning = function () {
            var output = "";
            for (var i = 0; i < n - 1; i++) {
                output += string[i];
            }
            return output;
        }
        var stringEnding = function () {
            var output = "";
            for (var i = n - 1; i < string.length; i++) {
                output += string[i];
            }
            return output;
        }
        output += stringBeginning() + insertion +  stringEnding();
        return output;
    }
    return newString();
}


console.log(insertString("My random string", "JS ", 10));