// Write a function to find number of years until retirement based on year of birth.


function untilRetirement(birthYear, pensionAge, currentYear) {
    var result;
    result = birthYear + pensionAge - currentYear;
    return result;
}


console.log(untilRetirement(1958, 65, 2017));


function untilRetirement1(birthYear, pensionAge) {
    var result;
    result = birthYear + pensionAge - new Date().getFullYear();
    return result;
}


console.log(untilRetirement1(1958, 65));