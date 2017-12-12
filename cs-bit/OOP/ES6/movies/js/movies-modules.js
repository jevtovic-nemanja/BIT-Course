//Object interface module pattern

const uiController = (() => {

    const DOMStrings = Object.freeze({
        inputTitle: "#title",
        inputLength: "#length",
        inputGenre: "#selectGenre",
        containerError: "#movieError",
        containerMovieList: "#movieListHTML",
        buttonCreate: "#createMovie",
        formElement: "form",
        totalElement: "#totalMoviesLength"
    });

    return {

        getDOMStrings() {
            return DOMStrings;
        },

        getInput() {
            const titleElement = document.querySelector(DOMStrings.inputTitle);
            const lengthElement = document.querySelector(DOMStrings.inputLength);
            const genreElement = document.querySelector(DOMStrings.inputGenre);
            const selectedGenre = genreElement[genreElement.selectedIndex];

            return {
                title: titleElement.value,
                length: lengthElement.value,
                genre: selectedGenre.value
            }
        },

        showError({
            title,
            genre,
            length
        }) {
            let errorMessage = "Unknown error!";
            if (!title) {
                errorMessage = "Please select a title."
            } else if (!length) {
                errorMessage = "Please select a length."
            } else if (genre === "none") {
                errorMessage = "Please select a genre."
            }
            document.querySelector(DOMStrings.containerError).innerHTML = `<p>${errorMessage}</p>`;
        },

        clearFormData() {
            document.querySelector(DOMStrings.formElement).reset();
            document.querySelector(DOMStrings.containerError).innerHTML = "";
            document.querySelector(DOMStrings.inputTitle).focus();
        },

        printMovieList(movie) {
            const movieListElement = document.querySelector(DOMStrings.containerMovieList);
            const content = `<li>${movie.getData()}</li>`;
            movieListElement.innerHTML += content;
        },

        printTotalMoviesLength(number = "-") {
            const totalMoviesLengthElement = document.querySelector(DOMStrings.totalElement);
            totalMoviesLengthElement.innerHTML = number;
        }
    }
})();

const dataController = (() => {

    const data = {
        movies: [],
        totalMoviesLength: 0
    }

    class Movie {
        constructor(title, length, genre) {
            this.title = title;
            this.length = length;
            this.genre = genre;
        }
        getData() {
            const genreOutput = this.genre.charAt(0) + this.genre.charAt(this.genre.length - 1);
            const result = `${this.title}, ${this.length}, ${genreOutput.toUpperCase()}`;
            return result;
        }
    }

    return {

        addMovie(title, length, genre) {
            const movie = new Movie(title, length, genre);
            data.movies.push(movie);
            data.totalMoviesLength += movie.length;
            return movie;
        },

        getTotalMoviesLength() {
            return data.totalMoviesLength;
        }
    }
})();

const mainController = ((uiCtrl, dataCtrl) => {

    const setEventListeners = () => {
        const DOM = uiCtrl.getDOMStrings();

        document.querySelector(DOM.buttonCreate).addEventListener("click", addMovieMain);

        document.addEventListener("keydown", event => {
            if (event.keyCode === 13) {
                addMovieMain();
            }
        });
    };

    const addMovieMain = () => {
        const {
            title,
            genre,
            length
        } = uiCtrl.getInput();

        if (!title || !length || genre === "none") {
            uiCtrl.showError({
                title,
                genre,
                length
            });
            return;
        }

        const movie = dataCtrl.addMovie(title, Number.parseInt(length), genre);

        uiCtrl.clearFormData();

        uiCtrl.printMovieList(movie);

        const totalMoviesLength = dataCtrl.getTotalMoviesLength();
        uiCtrl.printTotalMoviesLength(totalMoviesLength);
    };

    return {
        init() {
            setEventListeners();
            console.log("The app is now running.")
        }
    }
})(uiController, dataController);

mainController.init();