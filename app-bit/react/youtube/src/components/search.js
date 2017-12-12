import React from "react";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
        this.timeout = null;

        this.bindEventHandlers();
    }

    initState() {
        return {
            searchString: ""
        };
    }

    bindEventHandlers() {
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault();

        const value = event.target.value;
        const searchString = value.toLowerCase();

        this.setState({ searchString: searchString });

        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
            this.props.onSearch(searchString);
        }, 3000);
    }

    render() {
        return (
            <form className="mt-3 mb-3 w-100">
                <div className="input-group">
                    <input type="text" placeholder="Search..." value={this.state.searchString} onChange={this.handleInputChange} className="form-control" style={{ width: "85%" }} />
                </div>
            </form>
        );
    }
}

export default Search;