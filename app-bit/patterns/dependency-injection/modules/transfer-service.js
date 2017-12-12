class TrainTransferService {
    transportTo(place) {
        console.log(`Going to ${place} by train!`);
    }
}

class PlaneTransferService {
    transportTo(place) {
        console.log(`Flying to ${place}!`);
    }
}


//Dependency injection

module.exports.Service = TrainTransferService;
// module.exports.Service = PlaneTransferService;

//By changing the dependency here, we change the whole app.
//Change is done declaratively, instead of imperatively: we only use the dependency's interface.