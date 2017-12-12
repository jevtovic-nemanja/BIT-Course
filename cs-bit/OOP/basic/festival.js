"strict mode";

(function () {

    console.log("Hi!");


    // Function for creating movie objects
    function createMovie(title, length, genre) {
        var movie = new Movie(title, genre, length);
        return movie;
    };


    // Function for creating program objects
    function createProgram(date) {
        var program = new Program(date);
        return program;
    };


    //Creating movie objects
    var matrix = createMovie("Matrix", 120, "SF");
    var tito = createMovie("Tito i ja", 95, "Comedy");
    var snatch = createMovie("Snatch", 101, "Action");
    var scream = createMovie("Scream", 111, "Horror");


    //Creating program objects
    var pg1 = createProgram(new Date("Oct 24, 2017"));
    var pg2 = createProgram(new Date("Oct 25, 2017"));


    //Creating festival objects
    var fest = new Festival("FEST", 8);


    //Adding movies to programs
    pg1.addMovie(matrix);
    pg1.addMovie(tito);
    pg1.addMovie(snatch);
    pg1.addMovie(scream);

    pg2.addMovie(matrix);
    pg2.addMovie(tito);
    pg2.addMovie(snatch);
    pg2.addMovie(scream);


    //Adding programs to festivals
    fest.addProgram(pg1);
    fest.addProgram(pg2);


    //Getting festival data
    console.log(fest.getData());
})();


//Genre constructor
function Genre(name) {
    this.name = name;

    this.getData = function () {
        var output = this.name.charAt(0) + this.name.charAt(this.name.length - 1);
        var result = output.toUpperCase();
        return result;
    };
}


//Movie constructor
function Movie(title, genre, length) {
    this.title = title;
    this.genre = new Genre(genre);
    this.length = length;

    this.getData = function () {
        var result = this.title + ", " + this.length + ", " + this.genre.getData();
        return result;
    };

    //Error if length is not number
    if (typeof length !== "number") {
        throw {
            name: "InputTypeError",
            message: "Length input must be a number!"
        }
    }
}


//Program constructor
function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.numberOfMovies = 0;

    this.getData = function () {
        var programLength = 0;
        var output = "";
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i];
            programLength += movie.length;
            output += movie.getData() + "\n";
        }
        var result = this.date + ", Length of all movies: " + programLength + "\n" + output;
        return result;
    };

    //Errors if there are more than 4 movies of the same genre or if length of all movies in the list exceeds 8 hours.
    this.addMovie = function (movie) {
        var counter = 0;
        var counter2 = movie.length;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movieElement = this.listOfMovies[i];
            counter2 += movieElement.length;
            if (movieElement.genre.name === movie.genre.name) {
                counter++;
            }
        }

        if (counter > 3) {
            throw {
                name: "GenreError",
                message: "There cannot be more than 4 movies of the same genre."
            }
        } else if (counter2 > 480) {
            throw {
                name: "LengthError",
                message: "Length of all movies in the list cannot be over 8 hours."
            }
        } else {
            this.listOfMovies.push(movie);
            this.numberOfMovies++;
        }
    };
}


//Festival constructor
function Festival(name, maxNoOfFilms) {
    this.name = name;
    this.maxNoOfFilms = maxNoOfFilms;
    this.listOfPrograms = [];
    this.totalNumberOfMovies = 0;

    //Write to be announced if there are no movies
    this.getData = function () {
        var output = "";
        var result;
        if (this.listOfPrograms.length === 0) {
            result = "Weekend festival" + "\n\t" + "Program to be announced";
        } else {
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                var program = this.listOfPrograms[i];
                output += program.getData() + "\n";
            }
            result = this.name + ", Total number of movies: " + this.totalNumberOfMovies + "\n" + output;
        }
        return result;
    };

    //Error if max number of movies is exceeded
    this.addProgram = function (program) {
        if (program.numberOfMovies + this.totalNumberOfMovies > this.maxNoOfFilms) {
            throw {
                name: "MaxNoError",
                message: "Maximum number of movies exceeded!"
            }
        } else {
            this.listOfPrograms.push(program);
            this.totalNumberOfMovies += program.numberOfMovies;
        }
    };

    //Error if max number of films is not number
    if (typeof maxNoOfFilms !== "number") {
        throw {
            name: "InputTypeError",
            message: "Max number of movies input must be a number!"
        }
    }
}

