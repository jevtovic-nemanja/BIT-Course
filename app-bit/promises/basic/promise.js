console.log("First line of code");

const p1 = new Promise((resolve, reject) => {
    let k = 0;
    for (let i = 0; i < 1000; i++) {
        k += i;
    }
    console.log("Eight line of code (after for)");

    const date = new Date().getMilliseconds();

    if (date % 2 === 0) {
        reject("Error! Milliseconds divisible by two.");
        return;
    } else {
        resolve(k);
        return;
    }
});

p1.then(value => console.log("The sum is " + value + ".")).catch(reason => console.log(reason));

console.log("Final line of code");