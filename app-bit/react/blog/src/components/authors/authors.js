import React from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../constants";

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
    }

    initState() {
        return {
            authors: null
        };
    }

    componentDidMount() {
        this.loadAuthorsData();
    }

    loadAuthorsData() {
        const url = `${BASE_URL}/users`;

        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ authors: response }));
    }

    renderAuthorsList(author) {
        const { id, name } = author;

        return (
            <div key={id}>
                <h3><Link to={`author/${id}`}>{name}</Link></h3>
                <hr />
            </div>
        );
    }

    render() {
        const authors = this.state.authors;

        if (!authors) {
            return (
                <main>
                    <div className="content">
                        <h2>Authors list is loading...</h2>
                    </div>
                </main>
            );
        }

        return (
            <main>
                <div className="content">
                    <h2>Authors ({authors.length})</h2>
                    {authors.map(author => this.renderAuthorsList(author))}
                </div>
            </main>
        );
    }
}

export default Authors;