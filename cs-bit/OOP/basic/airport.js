"strict mode";

(function () {

    console.log("Hi");


    //Function for creating flght objects
    function createFlight(relation, date) {
        var flight = new Flight(relation, date);
        return flight;
    };


    //Function for creating passenger objects
    function createPassenger(name, surname, seatNumber, category) {
        var passenger = new Passenger(name, surname, seatNumber, category);
        return passenger;
    }


    //Creating airport object
    var airportNT = new Airport();


    //Creating flight objects
    var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");


    //Creating passenger objects
    var passenger1 = createPassenger("John", "Snow", 1, "b");
    var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
    var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
    var passenger4 = createPassenger("Tyrion", "Lannister");

    //Creating passenger object changing seats
    var passenger5 = createPassenger("John", "Snow", 3, "e");


    //Adding passengers to flights
    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight1.addPassenger(passenger5);

    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);


    //Adding flights to airport
    airportNT.addFlight(flight1);
    airportNT.addFlight(flight2);


    //Getting airport data
    airportNT.getData();
})();


//Person constructor
function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.getData = function () {
        var output = this.name + " " + this.surname;
        return output;
    };
}


//Seat constructor
function Seat(number, category) {

    //If seat number is not assigned, assign random seat
    this.number = number || Math.round(90 * Math.random() + 10);

    //If category is not specified it's business
    if (category !== "b") {
        this.category = "e";
    } else {
        this.category = "b"
    }

    this.getData = function () {
        var output = "" + this.number + ", " + this.category.toUpperCase();
        return output;
    };
}


//Passenger constructor
function Passenger(name, surname, seatNumber, category) {
    this.person = new Person(name, surname);
    this.seat = new Seat(seatNumber, category);

    //Format categories to "business" and "economy"
    this.getData = function () {
        var seatOutput = "";
        if (this.seat.category === "b") {
            seatOutput = "usiness";
        }
        if (this.seat.category === "e") {
            seatOutput = "conomy";
        }
        var output = "" + this.seat.getData() + seatOutput + ", " + this.person.getData();
        return output;
    };
}


//Flight constructor
function Flight(relation, date) {
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPassengers = [];
    this.noOfPassengers = 0;
    this.noOfBusinessPassengers = 0;

    //Format date, format relation to abbreviaton
    this.getData = function () {

        var passengerData = "";
        for (var i = 0; i < this.listOfPassengers.length; i++) {
            var passenger = this.listOfPassengers[i];
            passengerData += passenger.getData() + "\n";
        }

        var monthOutput = this.date.getMonth() + 1;
        var dateOutput = this.date.getDate() + "." + monthOutput + "." + this.date.getFullYear();

        var vowels = "aeiou";
        var index = this.relation.search(" - ");
        var from = this.relation.slice(0, index);
        var to = this.relation.slice(index + 3, this.relation.length);
        var indexFrom;
        var indexTo;
        for (var j = 0; j < from.length; j++) {
            var fromString = from[j];
            if (vowels.search(fromString) === -1) {
                indexFrom = j;
            }
        }
        for (var k = 0; k < to.length; k++) {
            var toString = to[k];
            if (vowels.search(toString) === -1) {
                indexTo = k;
            }
        }
        var relationOutput = from[0].toUpperCase() + from[indexFrom].toUpperCase() + " - " + to[0].toUpperCase() + to[indexTo].toUpperCase();

        var output = dateOutput + ", " + relationOutput + "\n" + passengerData + "Business passengers: " + this.noOfBusinessPassengers + "\n";
        return output;
    };

    //Errors if two passengers have same seat number or if flight has more than 100 passengers
    //If the same person changes seat or category, update list of passengers
    this.addPassenger = function (passenger) {
        var seatCounter = 0;
        for (var i = 0; i < this.listOfPassengers.length; i++) {
            var passengerElement = this.listOfPassengers[i];
            if (passengerElement.seat.number === passenger.seat.number) {
                seatCounter++;
            }
        }

        var nameCounter = 0;
        var index;
        for (var j = 0; j < this.listOfPassengers.length; j++) {
            var passengerName = this.listOfPassengers[j].person.name;
            if (passengerName === passenger.person.name) {
                for (var k = 0; k < this.listOfPassengers.length; k++) {
                    var passengerSurname = this.listOfPassengers[k].person.surname;
                    if (passengerSurname === passenger.person.surname) {
                        index = k;
                        nameCounter++;
                        break;
                    }
                }
            }
        }

        if (seatCounter > 0) {
            throw {
                name: "SeatError",
                message: "Two passengers cannot have the same seat number!"
            }
        } else if (this.noOfPassengers === 100) {
            throw {
                name: "CapacityError",
                message: "The flight must not have more than 100 passengers"
            }
        } else if (nameCounter > 0) {
            if (passenger.seat.category !== this.listOfPassengers[index].seat.category) {
                if (passenger.seat.category === "b") {
                    this.noOfBusinessPassengers++
                } else {
                    this.noOfBusinessPassengers--
                }
            }
            this.listOfPassengers[index] = passenger;
        } else {
            this.listOfPassengers.push(passenger);
            this.noOfPassengers++;
            if (passenger.seat.category === "b") {
                this.noOfBusinessPassengers++;
            }
        }
    };
}


//Airport constructor
function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.totalNoOfPassengers = 0;
    this.totalNoOfBusinessPassengers = 0;

    this.addFlight = function (flight) {
        this.listOfFlights.push(flight);
        this.totalNoOfPassengers += flight.noOfPassengers;
        this.totalNoOfBusinessPassengers += flight.noOfBusinessPassengers;
    };

    this.getData = function () {
        var flightData = "";
        for (var i = 0; i < this.listOfFlights.length; i++) {
            var flight = this.listOfFlights[i];
            flightData += flight.getData() + "\n";
        }
        var output = "Airport: " + this.name + ", total passengers: " + this.totalNoOfPassengers + "\n" + flightData + "\n" + "Total business passengers: " + this.totalNoOfBusinessPassengers;
        console.log(output);
    };
}