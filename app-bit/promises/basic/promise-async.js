console.log("First line of code");

// setTimeout(function(n), wait, arguments(goes to n));

const p1 = new Promise((resolve, reject) => {
    for (let i = 0; i < 1000; i++) {
        setTimeout(n => {
            console.log(`Promise1: ${n}`);
            if (n === 999) {
                resolve(n);
            }
        }, i, i);
    }
});

const p2 = new Promise((resolve, reject) => {
    for (let i = 0; i < 1000; i++) {
        setTimeout(n => {
            console.log(`Promise2: ${n}`);
            if (n === 999) {
                resolve(n);
            }
        }, i+1, i);
    }
});

p1.then(value => console.log(`P1 is done with ${value}`));
p2.then(value => console.log(`P2 is done with ${value}`));

Promise.all([p1, p2]).then(() => console.log("All is done!"));
Promise.race([p1, p2]).then(() => console.log("Race winner is done!"));