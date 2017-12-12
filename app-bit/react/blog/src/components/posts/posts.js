import React from "react";

import SinglePost from "./singlePost";
import MorePostsFromAuthor from "./morePostsFromAuthor";

import { BASE_URL, LOCAL_POSTS_KEY } from "../../constants";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
    }

    initState() {
        return {
            post: null,
            user: null
        };
    }

    loadData(id) {
        let post = null;
        const url = `${BASE_URL}/posts/${id}`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    post = response.json();
                } else {
                    const posts = JSON.parse(localStorage.getItem(LOCAL_POSTS_KEY));
                    post = posts
                        .filter(post => post.id === parseInt(id))
                        .pop();
                }
                return post;
            })
            .then(post => {
                this.setState({ post: post });

                const { userId } = post;
                const url = `${BASE_URL}/users/${userId}`;

                fetch(url)
                    .then(result => result.json())
                    .then(user => this.setState({ user: user }));
            });
    }


    componentDidMount() {
        const id = `${this.props.match.params.id}`;
        this.loadData(id);
    }

    componentWillReceiveProps(nextProps) {
        const id = `${nextProps.match.params.id}`;
        this.loadData(id);
    }

    render() {
        const post = this.state.post;
        const user = this.state.user;

        if (!user) {
            return (
                <main>
                    <div className="content">
                        <h2>Post is loading...</h2>
                    </div>
                </main>
            );
        }

        return (
            <main>
                <SinglePost post={post} author={user} />
                <MorePostsFromAuthor authorId={user.id} originalPostId={post.id} />
            </main>
        );
    }
}

export default Posts;