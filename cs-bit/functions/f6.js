// Write a function to find position of first occurrence of character in a string. Result should be in human numeration form.
// If there are no occurrences of character function should return -1.


function humanize(n) {
    var result = "";
    if ((n % 100) >= 11 && (n % 100) <= 13) {
        result = n + "th";
    } else if ((n % 10) === 1) {
        result = n + "st";
    } else if ((n % 10) === 2) {
        result = n + "nd";
    } else if ((n % 10) === 3) {
        result = n + "rd";
    } else {
        result = n + "th";
    }
    return result;
}

function firstOccurence(input, letter) {
    var result = -1;
    for (var i = 0; i < input.length; i++) {
        if (input[i] === letter) {
            result = humanize(i + 1);
            return result;
        }
    }
    return result;
}


console.log(firstOccurence("djokajd", "d"));


function firstOccurence1(input, letter) {
    var index = input.indexOf(letter);
    if (index === -1) {
        return index;
    } else {
        return humanize(index + 1);
    }
}


console.log(firstOccurence1("djokajd", "d"));