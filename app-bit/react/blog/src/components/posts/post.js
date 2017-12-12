import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = props => {
    const { id, title, body } = props.post;
    const url = `/posts/${id}`;

    return (
        <Link to={url} >
            <div className="post">
                <h1>{title}</h1>
                <p className="idNumber">{id}</p>
                <p>{body}</p>
            </div>
        </Link >
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.number,
        body: PropTypes.string
    }).isRequired
};

export default Post;