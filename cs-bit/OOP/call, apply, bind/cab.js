const ninjaObj = {
    job: "ninja",
    talk(who, adjective = "") {
        return `Hey, ${who}, I am a ${adjective} ${this.job}.`;
    }
}

const programmerObj = {
    job: "programmer"
}


//Call
console.log(ninjaObj.talk("dude"));
console.log(ninjaObj.talk.call(programmerObj, "dude"));
console.log(ninjaObj.talk.call(programmerObj, "girl"));
console.log(ninjaObj.talk.call(programmerObj, "girl", "great"));


//Apply
console.log(ninjaObj.talk("dude", "fast"));
console.log(ninjaObj.talk.apply(programmerObj, ["girl", "great"]));


//Bind

//Used for currying functions --- if there is no this, pass null as first argument
const programmerObjMan = ninjaObj.talk.bind(programmerObj, "man");
console.log(programmerObjMan("great"));
const programmerObjGirlJava = ninjaObj.talk.bind(programmerObj, "girl", "java");
console.log(programmerObjGirlJava());


//Call and apply with callback functions
const clientData = {
    id: 12587,
    fullName: "Not set",
    setName(firstName, lastName) {
        this.fullName = `${firstName} ${lastName}`;
    }
}

const setFullName = (callbackObj, callback, firstName, lastName) => {
    callback.apply(callbackObj, [firstName, lastName]);
}

const getUserInput = setFullName.bind(null, clientData, clientData.setName);

getUserInput("Barack", "Obama");
console.log(clientData.fullName);


//In variables, callback functions and borrowing methods this can be set using call, apply and bind.


//In closures we can use const that = this just before the inner function (it will have acces).
const object = {
    data: [{ name: "Tiger Woods", age: 37 }, { name: "Phil Mickelson", age: 43 }],
    tournament: "The Open",
    getData() {
        this.data.forEach(function (player) {
            console.log(`${player.name} ${player.age} will play in ${this.tournament}`)
        });
    }
}

const theOpen = object.getData();


const objectWithThat = {
    data: [{ name: "Tiger Woods", age: 37 }, { name: "Phil Mickelson", age: 43 }],
    tournament: "The Open",
    getData() {
        const that = this;
        this.data.forEach(function (player) {
            console.log(`${player.name} ${player.age} will play in ${that.tournament}`)
        });
    }
}

const theOpenWithThat = objectWithThat.getData();


//Also, fat arrow functions have lexical this, which bypasses the problem alltogether.
const objectFatArrow = {
    data: [{ name: "Tiger Woods", age: 37 }, { name: "Phil Mickelson", age: 43 }],
    tournament: "The Open",
    getData() {
        this.data.forEach(player => console.log(`${player.name} ${player.age} will play in ${this.tournament}`)
        );
    }
}

const theOpenFatArrow = objectFatArrow.getData();