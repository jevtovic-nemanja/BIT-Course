var movies = [];
var programs = [];

function createMovie() {

    var titleElement = document.getElementById("title");
    var lengthElement = document.getElementById("length");
    var genreElement = document.getElementById("selectGenre");
    var genreSelectedElement = genreElement[genreElement.selectedIndex];
    var errorElement = document.getElementById("movieError");
    var printMoviesElement = document.getElementById("movieListHTML");
    var addMovieListElement = document.getElementById("addmovie-movie");

    var title = titleElement.value;
    var length = parseInt(lengthElement.value);
    var genre = genreSelectedElement.value;

    if (!title || !length || (genre === "none")) {
        errorElement.textContent = "Error! Please select a title, a length and a genre.";
        return;
    }

    errorElement.textContent = "";

    var movie = new Movie(title, genre, length);
    movies.push(movie);

    printMoviesElement.innerHTML += "<p>" + movie.getData() + "</p>";

    addMovieListElement.innerHTML += "<option>" + movie.title + "</option>";

    titleElement.value = "";
    lengthElement.value = "";
    genreElement.value = "none";
}

function createProgram() {

    var dateElement = document.getElementById("programDate");
    var errorElement = document.getElementById("programError");
    var printProgramsElement = document.getElementById("programListHTML");
    var addProgramListElement = document.getElementById("addmovie-program");

    var date = dateElement.value;

    if (!date) {
        errorElement.textContent = "Error! Please select a date."
        return;
    }

    errorElement.textContent = "";

    var program = new Program(date);
    programs.push(program);

    printProgramsElement.innerHTML += "<p>" + program.getData() + "</p>";

    addProgramListElement.innerHTML += "<option>" + program.date + "</option>";

    dateElement.value = "";
}

function addMovie() {

    var movieElement = document.getElementById("addmovie-movie");
    var movieSelectedElement = movieElement[movieElement.selectedIndex];
    var programElement = document.getElementById("addmovie-program");
    var programSelectedElement = programElement[programElement.selectedIndex];
    var errorElement = document.getElementById("addMovieError");
    var printAddMovieElement = document.getElementById("movie-in-program");

    var movieTitle = movieSelectedElement.value;
    var movie;
    var programDate = programSelectedElement.value;
    var program;

    if (movieTitle === "none" || programDate === "none") {
        errorElement.textContent = "Error! Please select a movie and a program."
        return;
    }

    errorElement.textContent = "";

    for (var i = 0; i < movies.length; i++) {
        var moviesElement = movies[i];
        if (movieTitle === moviesElement.title) {
            movie = moviesElement;
        }
    }

    for (var j = 0; j < programs.length; j++) {
        var programsElement = programs[j];
        if (programDate === programsElement.date) {
            program = programsElement;
        }
    }

    var errorControl = program.addMovie(movie);

    if (errorControl === 1) {
        errorElement.textContent = "GenreError! There cannot be more than 4 movies of the same genre."
        return;
    }

    errorElement.textContent = "";

    if (errorControl === 2) {
        errorElement.textContent = "LengthError! Length of all movies in the list cannot be over 8 hours."
        return;
    }

    errorElement.textContent = "";

    program.listOfMovies.push(movie);
    program.numberOfMovies++;
    program.lengthOfAllMovies += movie.length;

    printAddMovieElement.innerHTML += "<p>" + program.getData() + "</p><p>" + movie.getData() + "</p>";

    movieElement.value = "none";
    programElement.value = "none";
}

function festivalData() {

    var errorElement = document.getElementById("festivalDataError");
    var printFestivalDataElement = document.getElementById("festivalData");

    if (programs.length === 0) {
        errorElement.textContent = "Weekend festival program to be announced";
        return;
    }

    errorElement.textContent = "";

    var programData = "";

    for (var i = 0; i < programs.length; i++) {
        programData += "<p>" + programs[i].getData() + "</p>";
        for (var j = 0; j < programs[i].listOfMovies.length; j++) {
            programData += "<p>" + programs[i].listOfMovies[j].getData() + "</p>";
        }
    }

    printFestivalDataElement.innerHTML = programData;
}

function createFestival() {

    var nameElement = document.getElementById("festivalName");
    var maxElement = document.getElementById("festivalMax");
    var errorElement = document.getElementById("festivalError");
    var printFestivalsElement = document.getElementById("createdFestivals");
    var printFestivalDataElement = document.getElementById("festivalData");

    var name = nameElement.value;
    var max = parseInt(maxElement.value);

    if (!name || !max) {
        errorElement.textContent = "Error! Please select a name and a max number of films."
        return;
    }

    errorElement.textContent = "";

    var festivalNumberOfMovies = 0;
    for (var i = 0; i < programs.length; i++) {
        var program = programs[i];
        if (program.numberOfMovies + festivalNumberOfMovies > max) {
            errorElement.textContent = "Error! Maximum number of movies exceeded!";
            return;
        } else {
            festivalNumberOfMovies += program.numberOfMovies;
            errorElement.textContent = "";
        }
    }

    var festival = new Festival(name, max);

    for (var j = 0; j < programs.length; j++) {
        festival.listOfPrograms.push(programs[j]);
        festival.totalNumberOfMovies += programs[j].numberOfMovies;
        errorElement.textContent = "";
    }

    printFestivalsElement.innerHTML = "<p>" + festival.getData() + "</p>" + printFestivalDataElement.innerHTML;

    nameElement.value = "";
    maxElement.value = "";
}