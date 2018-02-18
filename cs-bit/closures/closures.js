//Closures have access to free variables: variables which are not local, nor passed as parameters.
//A closure is created every time the outter function returns.

//Closures can be used for factories and making stuff private.

//Function factory
const multiply = num1 => {
    return num2 => {
        return num1 * num2;
    }
}

const multiplyByTwo = multiply(2);
const multiplyByFour = multiply(4);

console.log(multiplyByTwo(2));
console.log(multiplyByFour(2));


//Privacy (pretty much an object interface)
function secretPassword() {
    const password = "xh38sk";
    return {
        guessPassword: function (guess) {
            if (guess === password) {
                return true;
            } else {
                return false;
            }
        }
    }
}

const isPassword = secretPassword();

console.log(isPassword.guessPassword("aaaa"));
console.log(isPassword.guessPassword("xh38sk"));


//Closures can be used in for loops, but we have to use let.

//Closures are formed when the log function executes. By then i = 3;
var resultsVar = [];

for (var i = 0; i < 3; i++) {
    resultsVar[i] = () => console.log(i);
}

resultsVar[0]();
resultsVar[1]();
resultsVar[2]();

//let
let resultsLet = [];

for (let i = 0; i < 3; i++) {
    resultsLet[i] = () => console.log(i);
}

resultsLet[0]();
resultsLet[1]();
resultsLet[2]();

//Or we can use another closure.

var resultsVarClosure = [];

var createClosure = i => () => console.log(i);

for (var i = 0; i < 3; i++) {
    resultsVarClosure[i] = createClosure(i);
}

resultsVarClosure[0]();
resultsVarClosure[1]();
resultsVarClosure[2]();

//Or an IIFE.

var resultsVarIIFE = [];

for (var i = 0; i < 3; i++) {
    resultsVarIIFE[i] = (i => () => console.log(i))(i);
}

resultsVarIIFE[0]();
resultsVarIIFE[1]();
resultsVarIIFE[2]();