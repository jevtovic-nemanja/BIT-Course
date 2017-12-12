const subject = () => {
    let observers = [];

    const subjectNotify = number => {
        for (let i = 0; i < observers.length; i++) {
            observers[i](number);
        }
    };

    return {
        run() {
            for (let i = 0; i < 100; i++) {
                if (i % 11 === 0) {
                    subjectNotify(i);
                }
            }
        },
        subscribe(observer) {
            observers.push(observer);
        }
    };
};

const observer = name => {
    const myName = name;

    return {
        notify(number) {
            console.log(myName + ": " + number + " has happened!");
        }
    };
};

const specialObserver = name => {
    const myName = name;

    return {
        notifySpecial(number) {
            console.log(myName + ": " + number + " has happened!");
        }
    };
};

const s = subject();
const o1 = observer("One");
const o2 = observer("Two");
const o3 = specialObserver("Special");

s.subscribe(o1.notify);
s.subscribe(o2.notify);
s.subscribe(o3.notifySpecial);

s.run();