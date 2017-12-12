// Write a program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';


function swapCharCase(string) {
    var newString = "";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < string.length; i++) {
        var element = string[i];
        if (upper.search(element) > -1) {
            newString += element.toLowerCase();
        }
        if (lower.search(element) > -1) {
            newString += element.toUpperCase();
        }
    }
    return newString;
}


console.log(swapCharCase("The Quick Brown FoX"));