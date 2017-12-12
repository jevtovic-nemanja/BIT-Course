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


var points = [80, 77, 88, 95, 68];
var sum = 0;
var avgPoints;

for (var i=0; i < points.length; i++) {
    sum += points[i];
}   avgPoints = sum / points.length;
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

    
/* Make new array containing elements made up by name and grades,
then calculate corresponding grades. */

var names = ["David", "Marco", "Danny", "John", "Thomas"];
var namesPoints = [];

for (var i=0; i < points.length; i++) {
    namesPoints[i] = [names[i], points[i]];
    sum += namesPoints[i][1];
}   avgPoints = sum / points.length;
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