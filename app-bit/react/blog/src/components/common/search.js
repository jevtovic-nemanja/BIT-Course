import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();

        this.bindEventHandlers();
    }

    initState() {
        return {
            searchString: "",
            instantSearch: false
        };
    }

    bindEventHandlers() {
        this.handleInput = this.handleInput.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.executeSearch = this.executeSearch.bind(this);
    }

    handleInput(event) {
        const searchString = event.target.value;
        const instantSearch = this.state.instantSearch;

        this.setState({ searchString: searchString });

        if (instantSearch) {
            this.props.notifyFilter(searchString);
        }
    }

    handleCheckbox() {
        this.setState(oldState => ({ instantSearch: !oldState.instantSearch }));
    }

    executeSearch(event) {
        event.preventDefault();

        const searchString = this.state.searchString;
        this.props.notifyFilter(searchString);
    }

    render() {
        const searchString = this.state.searchString;
        const instantSearch = this.state.instantSearch;

        return (
            <form className="input">
                <label>Filter posts: </label>
                <input type="text" value={searchString} onChange={this.handleInput} />

                <label>
                    {instantSearch
                        ? "Instant search is on"
                        : "Instant search is off"
                    }
                </label>

                <input type="checkbox" className="checkbox" onClick={this.handleCheckbox} />

                {instantSearch
                    ? <button className="hidden"></button>
                    : <button onClick={this.executeSearch}>Search</button>
                }

            </form>
        );
    }
}

export default Search;