/* eslint-disable react/prop-types */
import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();

        this.bindEventHandlers();
    }

    initState() {
        return {
            searchString: ""
        };
    }

    bindEventHandlers() {
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault();

        const value = event.target.value;
        const searchString = value.toLowerCase();

        this.setState({ searchString: searchString });
    }

    onSearch(event) {
        event.preventDefault();

        this.setState({ searchString: "" });

        this.props.onSearch(this.state.searchString);
    }

    render() {

        return (
            <form className="mt-4 mb-4 w-100">
                <div className="input-group">
                    <input type="text" placeholder="Search..." value={this.state.searchString} onChange={this.handleInputChange} className="form-control w-75" />
                    <button onClick={this.onSearch} className="btn w-25" >Search</button>
                </div>
            </form>
        );
    }
}

export default Search;