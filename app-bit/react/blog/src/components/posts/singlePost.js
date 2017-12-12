import React from "react";
import { Link } from "react-router-dom";

import Back from "../common/back";

const SinglePost = props => {
    const { title, body } = props.post;
    const { id, name } = props.author;

    return (
        <div className="content">
            <Back />
            <h2>{title}</h2>
            <h4 className="link"><Link to={`/author/${id}`}>{name}</Link></h4>
            <p>{body}</p>
            <hr></hr>
        </div>
    );
};

export default SinglePost;