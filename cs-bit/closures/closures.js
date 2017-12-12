//Closures have access to free variables: variables which are not local, nor passed as parameters.

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

//var - when i is changed in the loop, it automatically changes in the results array too
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