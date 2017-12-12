// Write a function to count vowels in provided string.


function vowelCount(string) {
    var result = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
            result++;
        }
    }
    return result;
}


console.log(vowelCount("participacija"));