
// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********


function printInFrame(array) {

    var maxElementLength = array[0].length;
    var output = "";
    var side = "";
    var body = "\n";
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > maxElementLength) {
            maxElementLength = array[i].length;
        }
    }
    for (var j = 0; j < array.length; j++) {
        if (array[j].length < maxElementLength) {
            var counter = 0;
            for (k = 0; k < maxElementLength - array[j].length + counter; k++) {
                array[j] += " ";
                counter++;
            }
        }
    }
    for (var l = 0; l < array.length; l++) {
        body += "* " + array[l] + " *\n";
    }
    for (var m = 0; m < maxElementLength + 4; m++) {
        side += "*";
    }
    output = side + body + side;
    return output;
}


console.log(printInFrame(["Hello", "World", "in", "a", "frame", "frames", "a"]));


// String.padEnd polyfill

if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength,padString) {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return String(this) + padString.slice(0,targetLength);
        }
    };
}


const printInFrame1 = array => {
    const frameWidth = Math.max(...(array.map(item => item.length))) + 4;
    const border = "*".repeat(frameWidth) + "\n";
    let body = "";
    array.forEach(string => {
        const paddedString = string.padEnd(frameWidth - 3);
        body += "* " + paddedString + "*\n";
    });
    return border + body + border;
};

console.log(printInFrame1(["Hello", "World", "in", "a", "frame", "frames", "a"]));