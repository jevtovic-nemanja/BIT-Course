const transferService = require("./modules/transfer-service").Service;

const doSomeWork = transportService => {
    const placeB = "Greece";
    transportService.transportTo(placeB);
};

doSomeWork(new transferService());