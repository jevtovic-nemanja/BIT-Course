"strict mode";

//Frozen continents object
const continents = Object.freeze({
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTHAMERICA: "SA",
    NORTHAMERICA: "NA",
    AUSTRALIA: "AU"
});


//Country constructor and prototype
class Country {
    constructor(countryName, odds, continent) {
        this.name = countryName;
        this.odds = odds;
        this.continent = continent;
        this.numberOfBets = 0;
    }
    getData () {
        const vowels = "aeiou";
        let index;
        let counter = 0;
        for (let i = 0; i < this.name.length; i++) {
            let countryNameLetter = this.name[i];
            if (vowels.search(countryNameLetter) === -1) {
                counter++;
                if (counter === 2) {
                    index = i;
                    break;
                }
            }
        }
        const countryOutput = this.name[0].toUpperCase() + this.name[index].toUpperCase();
        return countryOutput;
    }
}


//Person constructor and prototype
class Person {
    constructor(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    getData () {
        const age = new Date().getFullYear() - this.dateOfBirth.getFullYear();
        const output = `${this.name} ${this.surname}, ${age}`;
        return output;
    }
}


//Player constructor and prototype
class Player {
    constructor(personObj, betAmount, countryObj) {
        this.person = personObj;
        this.betAmount = betAmount;
        this.country = countryObj;
    }
    getData () {
        const output = `${this.country.getData()}, ${(this.betAmount * this.country.odds)} eur, ${this.person.getData()}`;
        return output;
    }
}


//Address constructor and prototype
class Address {
    constructor(country, city, zip, street, number) {
        this.country = country;
        this.city = city;
        this.zip = zip;
        this.street = street;
        this.number = number;
    }
    getData () {
        const vowels = "aeiou";
        let index;
        let counter = 0;
        for (let i = 0; i < this.country.length; i++) {
            let countryNameLetter = this.country[i];
            if (vowels.search(countryNameLetter) === -1) {
                counter++;
                if (counter === 2) {
                    index = i;
                    break;
                }
            }
        }
        const countryOutput = this.country[0].toUpperCase() + this.country[index].toUpperCase();
        const output = `${this.street} ${this.number}, ${this.zip} ${this.city}, ${countryOutput}`;
        return output;
    };
}


//Betting place constructor and prototype
class BettingPlace {
    constructor(addressObj) {
        this.address = addressObj;
        this.listOfPlayers = [];
        this.numberOfPlayers = 0;
        this.sumOfAllBetts = 0;
    }
    getData () {
        const addressString = this.address.getData();
        const addressOutput = addressString.slice(0, addressString.length - 2);
        const output = `${this.address.getData()} Sum of all bets: ${this.sumOfAllBetts} eur.`;
        return output;
    }
    addPlayer (player) {
        this.listOfPlayers.push(player);
        this.numberOfPlayers++;
        this.sumOfAllBetts += player.betAmount;
        player.country.numberOfBets++;
    }
}



//Betting house constructor and prototype
class BettingHouse {
    constructor(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.totalNumberOfPlayers = 0;
    }
    addBettingPlace (bettingPlace) {
        this.listOfBettingPlaces.push(bettingPlace);
        this.totalNumberOfPlayers += bettingPlace.numberOfPlayers;
    }
    getData (country) {
        let bettingPlacesData = "";
        for (let i = 0; i < this.listOfBettingPlaces.length; i++) {
            let bettingPlace = this.listOfBettingPlaces[i];
            bettingPlacesData += `\t${bettingPlace.getData()}\n`;
            for (let j = 0; j < this.listOfBettingPlaces[i].listOfPlayers.length; j++) {
                let player = this.listOfBettingPlaces[i].listOfPlayers[j];
                bettingPlacesData += `\t\t${player.getData()}\n`;
            }
        }
        
        let betsPerCountry;
        for (let k = 0; k < this.listOfBettingPlaces.length; k++) {
            for (let l = 0; l < this.listOfBettingPlaces[k].listOfPlayers.length; l++) {
                let playerElement = this.listOfBettingPlaces[k].listOfPlayers[l];
                if (country == playerElement.country.name) {
                    betsPerCountry = playerElement.country.numberOfBets;
                }
            }
        }
        if (!betsPerCountry) {
            betsPerCountry = 0;
        }
    
        const output = `${this.competition}, ${this.listOfBettingPlaces.length} betting places, ${this.totalNumberOfPlayers} bets\n${bettingPlacesData}There are ${betsPerCountry} bets on ${country}`;
        return output;
    }
}



(function () {

    //Function for creating player objects
    const createPlayer = (name, surname, dateOfBirth, betAmount, countryName, odds, continent) => {
        const personObj = new Person(name, surname, dateOfBirth);
        const countryObj = new Country(countryName, odds, continent);
        const player = new Player(personObj, betAmount, countryObj);
        return player;
    }


    //Function for creating betting places
    const createBettingPlace = (country, city, zip, street, number) => {
        const addressObj = new Address(country, city, zip, street, number);
        const bettingPlace = new BettingPlace(addressObj);
        return bettingPlace;
    }


    //Creating betting house object
    const bettingHouse = new BettingHouse("ICC Cricket World Cup Winner");


    //Creating player objects
    const player1 = createPlayer("Pera", "Peric", "Apr 17 1987", 500, "Sri Lanka", 2.2, continents.ASIA);
    const player2 = createPlayer("Djoka", "Djokic", "Oct 19 1977", 100, "England", 2.6, continents.EUROPE);
    const player3 = createPlayer("Mica", "Micic", "Feb 22 1990", 300, "South Africa", 2.3, continents.AFRICA);
    const player4 = createPlayer("Voja", "Vojic", "Aug 8 1983", 150, "Australia", 1.9, continents.AUSTRALIA);
    const player5 = createPlayer("Sima", "Simic", "Jan 7 1968", 1000, "Ireland", 7.5, continents.EUROPE);


    //Creating betting place objects
    const bettingPlace1 = createBettingPlace("Serbia", "Belgrade", "11000", "Vojvode Stepe", "137");
    const bettingPlace2 = createBettingPlace("Serbia", "Belgrade", "11000", "Kumodraska", "82");


    //Adding players to betting places
    bettingPlace1.addPlayer(player1);
    bettingPlace1.addPlayer(player2);
    bettingPlace1.addPlayer(player5);
    bettingPlace2.addPlayer(player3);
    bettingPlace2.addPlayer(player4);


    //Adding betting places to betting house
    bettingHouse.addBettingPlace(bettingPlace1);
    bettingHouse.addBettingPlace(bettingPlace2);


    //Getting betting house data
    console.log(bettingHouse.getData("England"));
})();