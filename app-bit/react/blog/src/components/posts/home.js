import React from "react";

import Post from "./post";
import Search from "../common/search";

import { BASE_URL, LOCAL_POSTS_KEY } from "../../constants";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();

        this.bindEventHandlers();
    }

    initState() {
        return {
            items: null,
            itemsOriginal: null,
        };
    }

    bindEventHandlers() {
        this.filterPosts = this.filterPosts.bind(this);
    }

    componentDidMount() {
        this.loadPostsData();
    }

    loadPostsData() {
        const url = `${BASE_URL}/posts`;
        fetch(url)
            .then(response => response.json())
            .then(response => {
                let localPosts = JSON.parse(localStorage.getItem(LOCAL_POSTS_KEY));
                let items = [];
                response
                    .filter(item => item.title)
                    .map(item => items.unshift(item));
                if (localPosts) {
                    localPosts.map(item => items.unshift(item));
                }
                this.setState({
                    items: items,
                    itemsOriginal: items,
                });
                localStorage.setItem(LOCAL_POSTS_KEY, JSON.stringify(localPosts));
            });
    }

    filterPosts(searchItem) {
        const itemsOriginal = this.state.itemsOriginal;

        if (!searchItem) {
            this.setState({ items: itemsOriginal });
            return;
        }

        const searchMatches = itemsOriginal.filter(item => item.title.includes(searchItem));
        this.setState({ items: searchMatches });
    }

    renderPostsList(post) {
        return <Post post={post} key={post.id} />;
    }

    render() {
        const items = this.state.items;

        if (!items) {
            return (
                <main>
                    <div className="content">
                        <h2>Posts are loading...</h2>
                    </div>
                </main>
            );
        }

        return (
            <main>
                <h1 className="postsTitle">Posts</h1>
                <Search notifyFilter={this.filterPosts} />

                {items.length
                    ? items.map(item => this.renderPostsList(item))
                    : <h2 className="postsTitle">Search doesn't return any results.</h2>
                }

            </main>
        );
    }
}

export default Home;