// Write a function to get first n number of characters and add “...” at the end of newly created string.


function cutString(string,n) {
    var result = "";
    var output = "";
    for (var i = 0; i < n; i++) {
        result += string[i];
    }
    output = result + "...";
    return output;
}


console.log(cutString("marmelada",3));


function cutString1(string,n) {
    var result = string.slice(0,n) + "...";
    return result;
}


console.log(cutString1("marmelada",3));