// Write a function that reverses a number. Result must be of type number.

// 12345 -> 54321 // Output must be of type number


function reverseNumber(number) {
    var result = 0;
    while (number > 0) {
        result *= 10;
        result += number % 10;
        number -= number % 10;
        number /= 10;
    }
    return result;
}


console.log(reverseNumber(12345));


function reverseNumber1(number) {
    var array = number.toString().split("");
    var result = array.reverse().join("");
    var output = parseInt(result);
    return output;
}


console.log(reverseNumber1(12345));


