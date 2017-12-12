const os = require("os");

let observers = [];

const subjectNotify = () => {
    for (let i = 0; i < observers.length; i++) {
        observers[i]();
    }
};

const check = () => {
    const ram = os.freemem();
    console.log(ram);
    if (ram < 1900000000) {
        subjectNotify();
    }
};

const subscribe = observer => observers.push(observer);

const run = () => setInterval(check, 1000);

module.exports.subscribe = subscribe;
module.exports.run = run;