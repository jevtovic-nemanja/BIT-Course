"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//let and const

var name = "Djoka";
var message = "My name is " + name;

console.log(message);

//Rest + new string method

var repeat = function repeat(number) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
    }

    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "stagod";

    console.log(data.repeat(number) + args);
};

var result = repeat(3, message);
var result2 = repeat(3);
var result3 = repeat(3, "haha", 1, 2, 3);

//Spread operator
var array = [4, "milisav", 8, 9, "pera"];

var result4 = repeat.apply(undefined, array);

//Class

var Djoka = function () {
    function Djoka(age) {
        _classCallCheck(this, Djoka);

        this.age = age;
    }

    _createClass(Djoka, [{
        key: "getAge",
        value: function getAge() {
            console.log("I am " + this.age + " years old!");
        }
    }]);

    return Djoka;
}();

var djoka = new Djoka(35);
djoka.getAge();

//Destructuring
var a = 1,
    b = 2,
    c = 3;


console.log(a);
console.log(b);
console.log(c);

//Closure (let vs var)
var results = [];

var _loop = function _loop(i) {
    results[i] = function () {
        var result = 3 * i;
        return result + 1;
    };
};

for (var i = 0; i < 3; i++) {
    _loop(i);
}

console.log(results[0]());
console.log(results[1]());
console.log(results[2]());
