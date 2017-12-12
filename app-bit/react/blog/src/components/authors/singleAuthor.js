import React from "react";

import Back from "../common/back";

import { BASE_URL } from "../../constants";

class SingleAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
    }

    initState() {
        return {
            author: null
        };
    }

    componentDidMount() {
        const authorId = this.props.match.params.id;
        this.loadAuthorData(authorId);
    }

    loadAuthorData(authorId) {
        const url = `${BASE_URL}/users/${authorId}`;

        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ author: response }));
    }

    render() {
        const author = this.state.author;

        if (!author) {
            return (
                <main>
                    <div className="content">
                        <h2>Author info is loading...</h2>
                    </div>
                </main>
            );
        }

        const { name, username, email, phone, address, company } = author;

        return (
            <main>
                <div className="content">
                    <Back />
                    <div className="authorInfo">
                        <h2>{name}</h2>
                        <p>Username: <span>{username}</span></p>
                        <p>Email: <span>{email}</span></p>
                        <p>Phone: <span>{phone}</span></p>
                        <hr />
                    </div>
                    <div className="address">
                        <h2>Address</h2>
                        <p>Street: <span>{address.street}</span></p>
                        <p>City: <span>{address.city}</span></p>
                        <p>Zipcode: <span>{address.zipcode}</span></p>
                    </div>
                    <div className="iframe">
                        <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d90571.74212689651!2d${address.geo.lng}!3d${address.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1511095959524`} width="290" height="180" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <hr className="hr" />
                    <div className="company">
                        <h2>Company</h2>
                        <p>Name: <span>{company.name}</span></p>
                        <p>Slogan: <span>{company.catchPhrase}</span></p>
                    </div>
                </div>
            </main>
        );
    }
}

export default SingleAuthor;