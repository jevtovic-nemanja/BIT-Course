/* Write a program that for string input of a grade from “A” - “F” outputs proper info message about that grade as following:
A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed".
Input different from letters A-F outputs message "Unknown grade" */


var grade = "A";

switch (grade) {
    case "A":
    case "a":
        console.log("Good job");
        break;
    case "B":
    case "b":
        console.log("Pretty good");
        break;
    case "C":
    case "c":
        console.log("Passed");
        break;
    case "D":
    case "d":
        console.log("Not so good");
        break;
    case "F":
    case "f":
        console.log("Failed");
        break;
    default:
        console.log("Unknown grade");
        break;
}