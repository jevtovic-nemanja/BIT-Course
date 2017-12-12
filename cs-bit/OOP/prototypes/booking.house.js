"strict mode";

//Frozen continents object
var continents = {
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTHAMERICA: "SA",
    NORTHAMERICA: "NA",
    AUSTRALIA: "AU"
};

Object.freeze(continents);


//Country constructor
function Country(countryName, odds, continent) {
    this.name = countryName;
    this.odds = odds;
    this.continent = continent;
    this.numberOfBets = 0;
};

//Country prototype
Country.prototype.getData = function () {
    var vowels = "aeiou";
    var index;
    var counter = 0;
    for (var i = 0; i < this.name.length; i++) {
        var countryNameLetter = this.name[i];
        if (vowels.search(countryNameLetter) === -1) {
            counter++;
            if (counter === 2) {
                index = i;
                break;
            }
        }
    }
    var countryOutput = this.name[0].toUpperCase() + this.name[index].toUpperCase();
    return countryOutput;
}


//Person constructor
function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = new Date(dateOfBirth);
};

//Person prototype
Person.prototype.getData = function () {
    var age = new Date().getFullYear() - this.dateOfBirth.getFullYear();
    var output = this.name + " " + this.surname + ", " + age;
    return output;
};


//Player constructor
function Player(personObj, betAmount, countryObj) {
    this.person = personObj;
    this.betAmount = betAmount;
    this.country = countryObj;
};

//Player prototype
Player.prototype.getData = function () {
    var output = this.country.getData() + ", " + (this.betAmount * this.country.odds) + " eur, " + this.person.getData();
    return output;
}


//Address constructor
function Address(country, city, zip, street, number) {
    this.country = country;
    this.city = city;
    this.zip = zip;
    this.street = street;
    this.number = number;
};

//Address prototype
Address.prototype.getData = function () {
    var vowels = "aeiou";
    var index;
    var counter = 0;
    for (var i = 0; i < this.country.length; i++) {
        var countryNameLetter = this.country[i];
        if (vowels.search(countryNameLetter) === -1) {
            counter++;
            if (counter === 2) {
                index = i;
                break;
            }
        }
    }
    var countryOutput = this.country[0].toUpperCase() + this.country[index].toUpperCase();
    var output = this.street + " " + this.number + ", " + this.zip + " " + this.city + ", " + countryOutput;
    return output;
};


//Betting place constructor
function BettingPlace(addressObj) {
    this.address = addressObj;
    this.listOfPlayers = [];
    this.numberOfPlayers = 0;
    this.sumOfAllBetts = 0;
};


//Betting place prototype
BettingPlace.prototype.getData = function () {
    var addressString = this.address.getData();
    var addressOutput = addressString.slice(0, addressString.length - 2);
    var output = this.address.getData() + " Sum of all bets: " + this.sumOfAllBetts + " eur.";
    return output;
};

BettingPlace.prototype.addPlayer = function (player) {
    this.listOfPlayers.push(player);
    this.numberOfPlayers++;
    this.sumOfAllBetts += player.betAmount;
    player.country.numberOfBets++;
};


//Betting house constructor
function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.totalNumberOfPlayers = 0;
};

//Betting house prototype
BettingHouse.prototype.addBettingPlace = function (bettingPlace) {
    this.listOfBettingPlaces.push(bettingPlace);
    this.totalNumberOfPlayers += bettingPlace.numberOfPlayers;
};

BettingHouse.prototype.getData = function (country) {
    var bettingPlacesData = "";
    for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
        var bettingPlace = this.listOfBettingPlaces[i];
        bettingPlacesData += "\t" + bettingPlace.getData() + "\n";
        for (var j = 0; j < this.listOfBettingPlaces[i].listOfPlayers.length; j++) {
            var player = this.listOfBettingPlaces[i].listOfPlayers[j];
            bettingPlacesData += "\t\t" + player.getData() + "\n";
        }
    }
    
    var betsPerCountry;
    for (var k = 0; k < this.listOfBettingPlaces.length; k++) {
        for (var l = 0; l < this.listOfBettingPlaces[k].listOfPlayers.length; l++) {
            var playerElement = this.listOfBettingPlaces[k].listOfPlayers[l];
            if (country == playerElement.country.name) {
                betsPerCountry = playerElement.country.numberOfBets;
            }
        }
    }
    if (!betsPerCountry) {
        betsPerCountry = 0;
    }

    var output = this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + this.totalNumberOfPlayers + " bets" + "\n" + bettingPlacesData + "There are " + betsPerCountry + " bets on " + country;
    return output;
};


(function () {

    //Function for creating player objects
    function createPlayer(name, surname, dateOfBirth, betAmount, countryName, odds, continent) {
        var personObj = new Person(name, surname, dateOfBirth);
        var countryObj = new Country(countryName, odds, continent);
        var player = new Player(personObj, betAmount, countryObj);
        return player;
    }


    //Function for creating betting places
    function createBettingPlace(country, city, zip, street, number) {
        var addressObj = new Address(country, city, zip, street, number);
        var bettingPlace = new BettingPlace(addressObj);
        return bettingPlace;
    }


    //Creating betting house object
    var bettingHouse = new BettingHouse("ICC Cricket World Cup Winner");


    //Creating player objects
    var player1 = createPlayer("Pera", "Peric", "Apr 17 1987", 500, "Sri Lanka", 2.2, continents.ASIA);
    var player2 = createPlayer("Djoka", "Djokic", "Oct 19 1977", 100, "England", 2.6, continents.EUROPE);
    var player3 = createPlayer("Mica", "Micic", "Feb 22 1990", 300, "South Africa", 2.3, continents.AFRICA);
    var player4 = createPlayer("Voja", "Vojic", "Aug 8 1983", 150, "Australia", 1.9, continents.AUSTRALIA);
    var player5 = createPlayer("Sima", "Simic", "Jan 7 1968", 1000, "Ireland", 7.5, continents.EUROPE);


    //Creating betting place objects
    var bettingPlace1 = createBettingPlace("Serbia", "Belgrade", "11000", "Vojvode Stepe", "137");
    var bettingPlace2 = createBettingPlace("Serbia", "Belgrade", "11000", "Kumodraska", "82");


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