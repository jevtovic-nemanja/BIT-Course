// Write a function to convert a string in abbreviated form.


function abbreviate(string) {
    var result = string.slice(0,string.length/2) + "...";
    return result;
}


console.log(abbreviate("petpet"));