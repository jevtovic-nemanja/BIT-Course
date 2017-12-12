// Write a function to capitalize the first letter of a string.


function capitalizeFirstLetter(string) {
    var letter = string[0];
    var result = string.replace(letter, letter.toUpperCase());
    return result;
}

console.log(capitalizeFirstLetter('askdhgasdhg'));