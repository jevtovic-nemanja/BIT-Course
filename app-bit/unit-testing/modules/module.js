//Mocha currently doesn't fully support ES6.

var add = function (a, b) {
    return a + b;
};

var slow = function (callback) {
    setTimeout(function () {
        callback("Finished.");
    }, 5000);
};

var addAfter = function (a, b, callback) {
    setTimeout(function () {
        callback(add(a, b));
    }, 5000);
};

module.exports.add = add;
module.exports.slow = slow;
module.exports.addAfter = addAfter;