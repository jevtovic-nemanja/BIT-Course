// Write a function that takes a number and returns array of its digits.


function numberToArray(number) {
    var reversed = 0;
    var counter = 0;
    var arrayDigits = [];
    while (number > 0) {
        reversed *= 10;
        reversed += number % 10;
        number -= number % 10;
        number /= 10;
        counter++;
    }
    for (var i = 0; i < counter; i++) {
        arrayDigits[i] = reversed % 10;
        reversed -= reversed % 10;
        reversed /= 10;
    }
    return arrayDigits;
}


console.log(numberToArray(123456789));


function numberToArray1(number) {
    return number.toString().split("").map(item => parseFloat(item));
}


console.log(numberToArray1(123456789));