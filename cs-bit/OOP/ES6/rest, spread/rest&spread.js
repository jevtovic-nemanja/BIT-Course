//Same syntax

//Rest -> to array, in parameters
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
        return multiplier * element;
    });
}

console.log(multiply(3, 1, 2, 3, 4, 5));

//Difference between rest parameters and the arguments object:

// rest parameters are only the ones that haven't been given a separate name, while the arguments object contains all arguments passed to the function;
// the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
// the arguments object has additional functionality specific to itself (like the callee property).


//Spread -> from array, in arguments

//Replace apply
function myFunction(x, y, z) {
    return x + y + z;
}

const args = [0, 1, 2];

console.log(myFunction(...args));

//Apply for new
const dateFields = [1970, 0, 1];
const d = new Date(...dateFields);

console.log(d);

//Array literals
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];

console.log(lyrics);

//Copy array
var arr = [1, 2, 3];
var arr2 = [...arr];

console.log(arr2);

//Concatenate arrays
let arr3 = [0, 1, 2];
const arr4 = [3, 4, 5];
arr3 = [...arr4, ...arr3];

console.log(arr3);