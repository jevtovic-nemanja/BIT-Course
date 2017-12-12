//let and const

let name = "Djoka";
let message = `My name is ${name}`;

console.log(message);


//Rest + default

const repeat = (number, data = "stagod", ...args) => {
    console.log(data.repeat(number) + args);
}

const result = repeat(3, message);
const result2 = repeat(3);
const result3 = repeat(3, "haha", 1, 2, 3);


//Spread operator
const array = [4, "milisav", 8, 9, "pera"];

const result4 = repeat(...array);


//Class + new string
class Djoka {
    constructor(age) {
        this.age = age;
    }
    getAge() {
        console.log(`I am ${this.age} years old!`);
    }
}

const djoka = new Djoka(35);
djoka.getAge();


//Destructuring
const [a, b, c] = [1, 2, 3];

console.log(a);
console.log(b);
console.log(c);


//Closure (let vs var)
const results = [];

for (let i = 0; i < 3; i++) {
    results[i] = () => {
        const result = 3 * i;
        return result + 1;
    }
}

console.log(results[0]());
console.log(results[1]());
console.log(results[2]());