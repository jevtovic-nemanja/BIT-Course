"strict mode";

//Genre constructor and prototype
class Genre {
    constructor(name) {
        this.name = name
    }
    getData() {
        const output = this.name.charAt(0) + this.name.charAt(this.name.length - 1);
        const result = output.toUpperCase();
        return result;
    }
}


//Movie constructor and prototype
class Movie {
    constructor(title, genre, length) {
        this.title = title;
        this.genre = new Genre(genre);
        this.length = length;

        //Error if length is not number
        if (typeof length !== "number") {
            throw {
                name: "InputTypeError",
                message: "Length input must be a number!"
            }
        }
    }
    getData() {
        const result = `${this.title}, ${this.length}, ${this.genre.getData()}`;
        return result;
    }
};



//Program constructor and prototype
class Program {
    constructor(date) {
        this.date = date;
        this.listOfMovies = [];
        this.numberOfMovies = 0;
    }
    getData() {
        let programLength = 0;
        let output = "";
        this.listOfMovies.forEach(movie => {
            programLength += movie.length;
            output += `${movie.getData()}\n`
        })
        const result = `${this.date}, Length of all movies: ${programLength}\n${output}`;
        return result;
    }

    //Errors if there are more than 4 movies of the same genre or if length of all movies in the list exceeds 8 hours.
    addMovie(movie) {
        let counter = 0;
        let counter2 = movie.length;
        this.listOfMovies.forEach(movieElement => {
            counter2 += movieElement.length;
            if (movieElement.genre.name === movie.genre.name) {
                counter++;
            }
        })

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



//Festival constructor and prototype
class Festival {
    constructor(name, maxNoOfFilms) {
        this.name = name;
        this.maxNoOfFilms = maxNoOfFilms;
        this.listOfPrograms = [];
        this.totalNumberOfMovies = 0;

        //Error if max number of films is not number
        if (typeof maxNoOfFilms !== "number") {
            throw {
                name: "InputTypeError",
                message: "Max number of movies input must be a number!"
            }
        }
    }
    //Write to be announced if there are no movies
    getData() {
        let output = "";
        let result;
        if (this.listOfPrograms.length === 0) {
            result = `Weekend festival\n\tProgram to be announced`;
        } else {
            this.listOfPrograms.forEach(program => {
                output += `${program.getData()}\n`;
            })
            result = `${this.name}, Total number of movies: ${this.totalNumberOfMovies}\n${output}`;
        }
        return result;
    }

    //Error if max number of movies is exceeded
    addProgram(program) {
        if (program.numberOfMovies + this.totalNumberOfMovies > this.maxNoOfFilms) {
            throw {
                name: "MaxNoError",
                message: "Maximum number of movies exceeded!"
            }
        } else {
            this.listOfPrograms.push(program);
            this.totalNumberOfMovies += program.numberOfMovies;
        }
    }
}


(() => {

    console.log("Hi!");


    // Function for creating movie objects
    const createMovie = (title, length, genre) => {
        const movie = new Movie(title, genre, length);
        return movie;
    };


    // Function for creating program objects
    const createProgram = (date) => {
        const program = new Program(date);
        return program;
    };


    //Creating movie objects
    const matrix = createMovie("Matrix", 120, "SF");
    const tito = createMovie("Tito i ja", 95, "Comedy");
    const snatch = createMovie("Snatch", 101, "Action");
    const scream = createMovie("Scream", 111, "Horror");


    //Creating program objects
    const pg1 = createProgram(new Date("Oct 24, 2017"));
    const pg2 = createProgram(new Date("Oct 25, 2017"));


    //Creating festival objects
    const fest = new Festival("FEST", 10);


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