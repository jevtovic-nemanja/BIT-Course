"strict mode";

//Person constructor and prototype
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getData() {
        const output = `${this.name} ${this.surname}`;
        return output;
    }
}


//Seat constructor and prototype
//If seat number is not assigned, assign random seat
//If category is not specified it's economy
class Seat {
    constructor(number = Math.round(90 * Math.random() + 10), category) {
        this.number = number;

        if (category !== "b") {
            this.category = "e";
        } else {
            this.category = "b"
        }
    }
    getData() {
        const output = `${this.number}, ${this.category.toUpperCase()}`;
        return output;
    }
}


//Passenger constructor and prototype
class Passenger {
    constructor(name, surname, seatNumber, category) {
        this.person = new Person(name, surname);
        this.seat = new Seat(seatNumber, category);
    }

    //Format categories to "business" and "economy"
    getData() {
        let seatOutput = "";
        if (this.seat.category === "b") {
            seatOutput = "usiness";
        }
        if (this.seat.category === "e") {
            seatOutput = "conomy";
        }
        const output = `${this.seat.getData()}${seatOutput}, ${this.person.getData()}`;
        return output;
    }
}

//Flight constructor and prototype
class Flight {
    constructor(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];
        this.noOfPassengers = 0;
        this.noOfBusinessPassengers = 0;
    }

    //Format date, format relation to abbreviaton
    getData() {

        let passengerData = "";
        this.listOfPassengers.forEach(passenger => {
            passengerData += `${passenger.getData()}\n`;
        })

        const monthOutput = this.date.getMonth() + 1;
        const dateOutput = `${this.date.getDate()}.${monthOutput}.${this.date.getFullYear()}`;

        const vowels = "aeiou";
        const index = this.relation.search(" - ");
        const from = this.relation.slice(0, index);
        const to = this.relation.slice(index + 3, this.relation.length);
        let indexFrom;
        let indexTo;
        for (let j = 0; j < from.length; j++) {
            let fromString = from[j];
            if (vowels.search(fromString) === -1) {
                indexFrom = j;
            }
        }
        for (let k = 0; k < to.length; k++) {
            let toString = to[k];
            if (vowels.search(toString) === -1) {
                indexTo = k;
            }
        }
        const relationOutput = `${from[0].toUpperCase()}${from[indexFrom].toUpperCase()} - ${to[0].toUpperCase()}${to[indexTo].toUpperCase()}`;

        const output = `${dateOutput}, ${relationOutput}\n${passengerData}Business passengers: ${this.noOfBusinessPassengers}\n`;
        return output;
    }

    //Errors if two passengers have same seat number or if flight has more than 100 passengers
    //If the same person changes seat or category, update list of passengers
    addPassenger(passenger) {
        let seatCounter = 0;
        this.listOfPassengers.forEach(passengerElement => {
            if (passengerElement.seat.number === passenger.seat.number) {
                seatCounter++;
            }
        })

        let nameCounter = 0;
        let index;
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
    }
}



//Airport constructor and prototype
class Airport {
    constructor() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.totalNoOfPassengers = 0;
        this.totalNoOfBusinessPassengers = 0;
    }
    addFlight(flight) {
        this.listOfFlights.push(flight);
        this.totalNoOfPassengers += flight.noOfPassengers;
        this.totalNoOfBusinessPassengers += flight.noOfBusinessPassengers;
    }
    getData() {
        let flightData = "";
        this.listOfFlights.forEach(flight => {
            flightData += `${flight.getData()}\n`;
        })
        const output = `Airport: ${this.name}, total passengers: ${this.totalNoOfPassengers}\n${flightData}\nTotal business passengers: ${this.totalNoOfBusinessPassengers}`;
        console.log(output);
    }
}


(() => {

    console.log("Hi");


    //Function for creating flght objects
    const createFlight = (relation, date) => {
        const flight = new Flight(relation, date);
        return flight;
    };


    //Function for creating passenger objects
    const createPassenger = (name, surname, seatNumber, category) => {
        const passenger = new Passenger(name, surname, seatNumber, category);
        return passenger;
    }


    //Creating airport object
    const airportNT = new Airport();


    //Creating flight objects
    const flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
    const flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");


    //Creating passenger objects
    const passenger1 = createPassenger("John", "Snow", 1, "b");
    const passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
    const passenger3 = createPassenger("Daenerys", "Targaryen", 14);
    const passenger4 = createPassenger("Tyrion", "Lannister");

    //Creating passenger object changing seats
    const passenger5 = createPassenger("John", "Snow", 3, "e");


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