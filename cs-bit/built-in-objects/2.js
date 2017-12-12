// Write a JavaScript function that reverses a number. 


function reverseNumber(num) {
    var array = num.toString().split("");
    var result = array.reverse().join("");
    return result;
}


console.log(reverseNumber(123));