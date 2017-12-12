const subjectModule = require("./modules/subject");
const observerModule = require("./modules/observer");

subjectModule.subscribe(observerModule.notify);
subjectModule.run();