// Write a program that prints a multiplication table for numbers up to 12.


function multiplicationTable(number) {
    var result = "\n";
    for (var i = 1; i <= number; i++) {
        for (var j = 1; j <= number; j++) {
            result += i*j + " ";
        }
        result += "\n";
    }
    return result;
}


console.log(multiplicationTable(12));