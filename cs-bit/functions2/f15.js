
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


console.log(printInFrame(["Hello", "World", "in", "a", "frame", "frames","a"]));