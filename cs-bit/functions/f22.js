// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"


function wordFind(string,word) {
    var counter = 1;
    var wordCounter = 0;
    var output = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === word[0]) {
            for (var j = 1; j < word.length; j++) {
                if (string[i + counter] === word[j]) {
                    counter++;
                }
            } 
        } if (counter === word.length) {
            wordCounter++;
            counter = 1;
        }
    }
    output = word + " was found " + wordCounter + " times.";
    return output;
}


console.log(wordFind('The quick fox brown fox', 'fox'));


function wordFind1(string,word) {
    var counter = 0;
    while (string.includes(word)) {
        var index = string.search(word);
        counter++;
        string = string.slice(index + word.length, string.length);
    }
    var output = word + " was found " + counter + " times.";
    return output;
}


console.log(wordFind1('The quick fox brown fox', 'fox'));