// Write a function to convert a number from one base to another. 


function convertBase(num, base, base2) {
    base2 = base2 || 10;
    var number = parseInt(num,base);
    var result = number.toString(base2);
    return result;
}


console.log(convertBase("ff",16,8));
console.log(convertBase(1256,10,8));
console.log(convertBase(1256,10,16));
console.log(convertBase(1256,10,2));