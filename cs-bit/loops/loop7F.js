/* Write a program which compute, the average marks of the following students. Then, this average is used to determine the corresponding grade. 
David 80
Marko 77
Dany 88
John 95
Thomas 68

The grades are computed as follows :
< 60% F
< 70% D
< 80% C
< 90% B
< 100% A */


function add() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] += arguments[i];
    }
    return result;
}

function divide() {
    var result;
    for (var i = 1; i < arguments.length; i++) {
        result = arguments[0] /= arguments[i];
    }
    return result;
}

var studentsPoints = [["David", 80], ["Marko", 77], ["Danny", 88], ["John", 95], ["Thomas", 68]];
var pointsSum = 0;
var avgPoints;

for (var i = 0; i < studentsPoints.length; i++) {
    pointsSum = add(pointsSum,studentsPoints[i][1]);
}   avgPoints = divide(pointsSum, studentsPoints.length);
if (avgPoints < 60) {
    console.log("F");
} else if (avgPoints < 70) {
    console.log("D");
} else if (avgPoints < 80) {
    console.log("C");
} else if (avgPoints < 90) {
    console.log("B");
} else if (avgPoints < 100) {
    console.log("A");
}