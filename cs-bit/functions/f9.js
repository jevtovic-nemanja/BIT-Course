// Write a function that accepts a number as a parameter and check if the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


function ifPrime(num) {
    var prime = 0;
    if (num < 2) {
        return false;
    } else if (num === 2) {
        return true;
    }
    for (var i = 2; i < num; i++) {
        if ((num % i) !== 0) {
            prime++;
        }
    }
    if (prime === num - 2) {
        return true;
    } else {
        return false;
    }
}


console.log(ifPrime(89));


// function isPrimeNumber(num) {
    
//        if (num === 1) {
//            return false;
//        } else if (num === 2) {
//            return true;
//        }
      
//        for (var x = 2; x < num; x++) {
//            if (num % x === 0) {
//                return false;
//            }
//        }
      
//        return true;
//     }
    
//     var isPrime = isPrimeNumber(37);
//     console.log(isPrime);