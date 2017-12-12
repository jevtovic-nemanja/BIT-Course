import React from "react";

import Save from "./save";

import { BASE_URL, LOCAL_POSTS_KEY } from "../../../constants";

class CreateNewPost extends React.Component {
    constructor(props) {
        super(props);

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.postToServer = this.postToServer.bind(this);
    }

    redirectToHome() {
        window.location.assign("/#/");
    }

    randomUserId() {
        return Math.round(9 * Math.random() + 1);
    }

    createRequestOptions(data) {
        const headers = {
            "Content-type": "application/json; charset=UTF-8"
        };

        const method = "POST";

        const userId = this.randomUserId();

        const bodyData = {
            title: data.title,
            body: data.body,
            userId: userId
        };

        const body = JSON.stringify(bodyData);

        return {
            headers,
            method,
            body
        };
    }

    postToServer(postInfo) {
        const url = `${BASE_URL}/posts`;
        const requestOptions = this.createRequestOptions(postInfo);

        fetch(url, requestOptions)
            .then(data => data.json())
            .then(data => {
                this.saveNewPost(data);
                this.redirectToHome();
            });
    }

    saveNewPost(postData) {
        let localPosts = JSON.parse(localStorage.getItem(LOCAL_POSTS_KEY));
        if (!localPosts) {
            localPosts = [];
        }
        if (localPosts.length) {
            postData.id += localPosts.length;
        }
        localPosts.push(postData);
        localStorage.setItem(LOCAL_POSTS_KEY, JSON.stringify(localPosts));
    }

    render() {
        return (
            <main>
                <div className="content">
                    <h2>Create New Blog Post</h2>
                    <Save notifyPostToServer={this.postToServer} />
                </div>
            </main>
        );
    }
}

export default CreateNewPost;