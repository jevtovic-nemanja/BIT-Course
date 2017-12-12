//Write a function to  alphabetize words of given string. Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z


function alphabetizeStringWords(string) {
    var arrayJoin = [];
    var array = string.split(" ");
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        arrayJoin[i] = element.split("").sort().join("");
    }
    var result = arrayJoin.join(" ");
    return result;
}


console.log(alphabetizeStringWords("afhas ohopwwkpf vwowirw hhfdhjk bfmd"));