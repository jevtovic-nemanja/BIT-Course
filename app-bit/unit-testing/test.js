const myModule = require("./modules/module");

var chai = require("chai");
chai.should();

describe("add function", function () {
    describe("core functionality", function () {
        it("should return sum of two parameters", function () {
            var actual = myModule.add(8, 3);
            actual.should.equal(11);
        });
        it("should not return anything but the sum of two parameters", function () {
            var actual = myModule.add(8, 3);
            actual.should.not.equal(10);
        });
    });
});

describe("slow function", function () {
    it("should print finished after 5 seconds", function (done) {
        myModule.slow(function (result) {
            result.should.equal("Finished.");
            done();
        });
    });
    it("should not print done1 after 5 seconds", function (done) {
        myModule.slow(function (result) {
            result.should.not.equal("done1");
            done();
        });
    });
});

describe("addAfter function", function () {
    it("should return sum of parameters after 5 seconds", function (done) {
        myModule.addAfter(1, 2, function (result) {
            result.should.equal(3);
            done();
        });
    });
    it("should not return anything but the sum of parameters after 5 seconds", function (done) {
        myModule.addAfter(1, 2, function (result) {
            result.should.not.equal(5);
            done();
        });
    });
});