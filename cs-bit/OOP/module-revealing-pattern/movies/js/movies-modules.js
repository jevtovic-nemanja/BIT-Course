var uiController = (function () {

    var DOMStrings = {
        inputTitle: "#title",
        inputLength: "#length",
        inputGenre: "#selectGenre",
        containerError: "#movieError",
        containerMovieList: "#movieListHTML",
        buttonCreate: "#createMovie",
        formElement: "form",
        totalElement: "#totalMoviesLength"
    };

    function getDOMStrings () {
        return DOMStrings;
    };

    function getInput() {
        var titleElement = document.querySelector(DOMStrings.inputTitle);
        var lengthElement = document.querySelector(DOMStrings.inputLength);
        var genreElement = document.querySelector(DOMStrings.inputGenre);
        var selectedGenre = genreElement[genreElement.selectedIndex];

        var result = {
            title: titleElement.value,
            length: lengthElement.value,
            genre: selectedGenre.value
        };

        return result;
    };

    function showError (input) {
        var errorMessage = "Unknown error!";
        if (!input.title) {
            errorMessage = "Please select a title."
        } else if (!input.length) {
            errorMessage = "Please select a length."
        } else if (input.genre === "none") {
            errorMessage = "Please select a genre."
        }
        document.querySelector(DOMStrings.containerError).innerHTML = "<p>" + errorMessage + "</p>";
    }

    function clearFormData () {
        document.querySelector(DOMStrings.formElement).reset();
        document.querySelector(DOMStrings.containerError).innerHTML = "";
        document.querySelector(DOMStrings.inputTitle).focus();
    };

    function printMovieList (movie) {
        var movieListElement = document.querySelector(DOMStrings.containerMovieList);
        var content = "<li>" + movie.getData() + "</li>";
        movieListElement.innerHTML += content;
    };

    function printTotalMoviesLength (number) {
        if (number) {
        var totalMoviesLengthElement = document.querySelector(DOMStrings.totalElement);
        totalMoviesLengthElement.innerHTML = number;
        }
    }

    return {
        getDOMStrings: getDOMStrings,
        getInput: getInput,
        showError: showError,
        clearFormData: clearFormData,
        printMovieList: printMovieList,
        printTotalMoviesLength: printTotalMoviesLength
    }
})();

var dataController = (function () {
    
        var data = {
            movies: [],
            totalMoviesLength: 0
        }
    
        function Movie(title, length, genre) {
            this.title = title;
            this.length = length;
            this.genre = genre;
        };
    
        Movie.prototype.getData = function () {
            var genreOutput = this.genre.charAt(0) + this.genre.charAt(this.genre.length - 1);
            var result = this.title + ", " + this.length + ", " + genreOutput.toUpperCase();
            return result;
        }
    
        function addMovie (title, length, genre) {
            var movie = new Movie (title, length, genre);
            data.movies.push(movie);
            data.totalMoviesLength += movie.length;
            return movie;
        }
    
        function getTotalMoviesLength () {
            return data.totalMoviesLength;
        }
    
        return {
            addMovieData: addMovie,
            getTotalMoviesLength: getTotalMoviesLength
        }
    })();

var mainController = (function (uiCtrl, dataCtrl) {

    function setEventListeners() {
        var DOM = uiCtrl.getDOMStrings();

        document.querySelector(DOM.buttonCreate).addEventListener("click", function () {
            addMovieMain();
        });

        document.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                addMovieMain();
            }
        });
    };

    function addMovieMain() {
        var input = uiCtrl.getInput();

        if (!input.title || !input.length || input.genre === "none") {
            uiCtrl.showError(input);
            return;
        }

        var movie = dataCtrl.addMovieData(input.title, parseInt(input.length), input.genre);

        uiCtrl.clearFormData();

        uiCtrl.printMovieList(movie);

        var totalMoviesLength = dataCtrl.getTotalMoviesLength();
        uiCtrl.printTotalMoviesLength(totalMoviesLength);
    };

    return {
        init: function () {
            setEventListeners();
            console.log("The app is now running.")
        }
    }
})(uiController, dataController);

mainController.init();