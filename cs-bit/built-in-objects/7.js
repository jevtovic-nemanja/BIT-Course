// Write a function that can pad (left, right) a string to get to a determined length.


function padString(string,length,direction,addedString) {
    addedString = addedString || " ";
    if (direction === "left") {
        var result = string.padStart(length,addedString);
    } else if (direction === "right") {
        var result = string.padEnd(length,addedString);
    } else {
        var result = "Choose left or right for direction."
    }
    return result;
}

console.log(padString("blablabla", 15, "left", "!!!"));
console.log(padString("blablabla", 15, "right", "!!!"));
console.log(padString("blablabla", 20, "asdf", "!!!"));
console.log(padString("blablabla", 20, "left"));
console.log(padString("blablabla", 5, "right"));