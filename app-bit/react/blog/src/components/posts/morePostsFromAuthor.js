import React from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../constants";

class MorePostsFromAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
    }

    initState() {
        return {
            authorsPosts: null
        };
    }

    componentDidMount() {
        this.loadMorePosts();
    }

    loadMorePosts() {
        const authorId = this.props.authorId;
        const url = `${BASE_URL}/posts?userId=${authorId}`;

        fetch(url)
            .then(response => response.json())
            .then(posts => this.setState({ authorsPosts: posts }));
    }

    filterAuthorsPosts(post) {
        const originalPostId = this.props.originalPostId;

        if (post.id !== originalPostId) {
            return post;
        }
    }

    renderAuthorsPostsList(post) {
        const { id, title } = post;

        return <p key={id} className="link"><Link to={`/posts/${id}`}>Post {id} - {title}</Link></p>;
    }

    render() {
        const authorsPosts = this.state.authorsPosts;

        if (!authorsPosts) {
            return (
                <div className="content">
                    <h2>Posts are loading</h2>
                </div>
            );
        }

        return (
            <div className="content">
                <h2>3 newest posts from same author</h2>

                {authorsPosts
                    .filter(post => this.filterAuthorsPosts(post))
                    .reverse()
                    .slice(0, 3)
                    .map(post => this.renderAuthorsPostsList(post))
                }

            </div>
        );
    }
}

export default MorePostsFromAuthor;