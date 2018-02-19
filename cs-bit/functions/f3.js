// Write a function to concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"


function concatenate(string, n) {
    var result = "";
    n = n || 1;
    for (var i = 1; i <= n; i++) {
        result += string;   
    }   
    return result;
}


console.log(concatenate("djoka", 3));


function concatenate1(string, n=1) {
    var result = string.repeat(n);
    return result;
}

console.log(concatenate1("djoka", 3));