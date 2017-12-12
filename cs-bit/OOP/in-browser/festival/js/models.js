//Movie constructor
function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
};

//Movie prototype
Movie.prototype.getData = function () {
    var output = this.genre.charAt(0) + this.genre.charAt(this.genre.length - 1);
    var result = this.title + ", " + this.length + ", " + output.toUpperCase();
    return result;
};

//Program constructor
function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.numberOfMovies = 0;
    this.lengthOfAllMovies = 0;
};

//Program prototype
Program.prototype.getData = function () {
    return this.date + ", " + "Length of all movies: " + this.lengthOfAllMovies;
};

//Errors if there are more than 4 movies of the same genre or if length of all movies in the list exceeds 8 hours.
Program.prototype.addMovie = function (movie) {
    var counter = 0;
    var counter2 = movie.length;
    for (var i = 0; i < this.listOfMovies.length; i++) {
        var movieElement = this.listOfMovies[i];
        counter2 += movieElement.length;
        if (movieElement.genre === movie.genre) {
            counter++;
        }
    }

    if (counter > 3) {
        return 1;
    } else if (counter2 > 480) {
        return 2;
    }
};

function Festival(name, maxNoOfFilms) {
    this.name = name;
    this.maxNoOfFilms = maxNoOfFilms;
    this.listOfPrograms = [];
    this.totalNumberOfMovies = 0;
};

//Festival prototype
//Write to be announced if there are no movies
Festival.prototype.getData = function () {
    var output = "";
    var result = this.name + ", Total number of movies: " + this.totalNumberOfMovies;
    return result;
};