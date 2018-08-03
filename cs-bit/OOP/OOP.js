//Inheritance in JavaScript

//1. Initializing object (properties and methods)

//Prototypal model
var answerPrototype = {
    constructor: function(value) {
        this.val = value;
    },
    get: function() {
        return this.val;
    }
};

//Classical model
function Answer(value) {
    this.val = value;
}
Answer.prototype.get = function() {
    return this.val;
};

//ES6
class Answer {
    constructor(value) {
        this.val = value;
    }
    get() {
        return this.val;
    }
};


// 2. Creating instances

//Prototypal model
var lifeAnswer = Object.create(answerPrototype);
lifeAnswer.constructor(42);
lifeAnswer.get();

var dessertAnswer = Object.create(answerPrototype);
dessertAnswer.constructor(3,14);
dessertAnswer.get();

//Classical model && ES6
var lifeAnswer = new Answer(42);
lifeAnswer.get();

var dessertAnswer = new Answer(3,14);
dessertAnswer.get();


//3. Creating subclasses

//Prototypal model
var firmAnswerPrototype = Object.create(answerPrototype);
firmAnswerPrototype.get = function() {
    return answerPrototype.get.call(this) + " !!";
}

//Classical model
function FirmAnswer(value) {
    Answer.call(this, value);
}
FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;
FirmAnswer.prototype.get = function() {
    return Answer.prototype.get.call(this) + " !!";
}

//ES6
class FirmAnswer extends Answer {
    constructor(value) {
        super(value);
    }
    get() {
         return super.get() + "!!";
    }
}


//4. Creating subclass instances

//Prototypal model
var luckyAnswer = Object.create(firmAnswerPrototype);
luckyAnswer.constructor(7);
luckyAnswer.get();

var magicAnswer = Object.create(firmAnswerPrototype);
magicAnswer.constructor(3);
magicAnswer.get();

//Classical model and ES6
var luckyAnswer = new FirmAnswer(7);
luckyAnswer.get();

var magicAnswer = new FirmAnswer(3);
magicAnswer.get();