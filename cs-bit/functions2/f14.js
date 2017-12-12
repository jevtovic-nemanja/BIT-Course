// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly Obese: greater than or equal to 40


function bodyMassIndex(weight,height) {
    var bmi;
    var output = "";
    bmi = weight / height / height;
    if (bmi < 15) {
        output = "Starvation";
    } else if (bmi < 17.5) {
        output = "Anorexic";
    } else if (bmi < 18.5) {
        output = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        output = "Ideal";
    } else if (bmi >= 25 && bmi < 30) {
        output = "Overweight";
    } else if (bmi >= 30 && bmi < 40) {
        output = "Obese";
    } else if (bmi >= 40) {
        output = "Morbidly Obese";
    }
    return output;
}


console.log(bodyMassIndex(78,1.78));