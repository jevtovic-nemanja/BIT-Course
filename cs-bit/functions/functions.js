function add() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] += arguments[i];
    }
    return result;
}

function subtract() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] -= arguments[i];
    }
    return result;
}

function multiply() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] *= arguments[i];
    }
    return result;
}

function square(num1) {
    var result = num1 * num1;
    return result;
}

function divide() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] /= arguments[i];
    }
    return result;
}

function modulo() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] %= arguments[i];
    }
    return result;
}

function equal() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] === arguments[i];
    }
    return result;
}

function printSpec() {
    var result = "";
    for (var i = 0; i < arguments.length; i++) {
        result += "/////" + arguments[i] + "\\\\\\\\\\";
    }
    return result;
}

function printChar() {
    var result = "";
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i][0];
    }
    return result;
}

function print() {
    var result = "";
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i] + " ";
    }
    return result;
}

function oddEven(num1) {
    var result;
    if ((num1 % 2) === 0) {
        result = num1 + " is even.";
    } else {
        result = num1 + " is odd.";
    }
    return result;
}


console.log(add(5, 6, -4, 8, 0.5, 10));
console.log(subtract(5, 6, -4, 8, 0.5, 10));
console.log(multiply(5, 6, -4, 8, 0.5, 10));
console.log(square(5));
console.log(divide(5, 6, -4, 8, 0.5, 10));
console.log(modulo(5, 6, -4, 8, 0.5, 10));
console.log(equal(5, 6, -4, 8, 0.5, 10));
console.log(printSpec(5, 6, -4, 8, 0.5, 10));
console.log(printChar("5878", "6321", "djoka", "pera", "false"));
console.log(print(5, 6, -4, 8, 0.5, 10));
console.log(oddEven(6));