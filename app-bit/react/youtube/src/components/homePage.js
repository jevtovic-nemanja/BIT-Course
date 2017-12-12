import React from "react";

import axios from "axios";

import { LIST_URL, SEARCH_URL } from "../constants";
import { VideoComponent } from "./videoComponent";
import Video from "./entities/video";
import Search from "./search";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();

        this.bindEventHandlers();
    }

    initState() {
        return {
            videoList: [],
            currentVideo: "",
            prevVideo: "",
            error: ""
        };
    }

    bindEventHandlers() {
        this.moveToCurrentVideo = this.moveToCurrentVideo.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        this.loadVideos(LIST_URL, "chart=mostPopular");
    }

    handleNetworkRequestError(error) {
        if (error.response) {
            this.setState({ error: error.response.data.error });
        } else if (error.request) {
            this.setState({ error: "There is no response from server." });
        }
    }

    loadVideos(url, params) {
        let videos = [];
        axios.get(`${url}&${params}`)
            .then(response => {
                response.data.items.map(item => {
                    const { id } = item;

                    const realId = (typeof id === "string") ? id : id.videoId;

                    const { title, channelTitle, publishedAt, description } = item.snippet;
                    const video = new Video(realId, title, channelTitle, publishedAt, description);
                    videos.push(video);
                });

                const currentVideo = videos.shift();
                this.setState({
                    videoList: videos,
                    currentVideo: currentVideo
                });
            })
            .catch(error => this.handleNetworkRequestError(error));
    }

    moveToCurrentVideo(event) {
        event.preventDefault();

        const title = event.target.textContent;

        const videoList = this.state.videoList;
        const oldPrevVideo = this.state.prevVideo;
        const newPrevVideo = this.state.currentVideo;

        const newCurrentVideo = videoList.filter(video => title === video.title)[0];
        const newVideoList = videoList.filter(video => video.title !== newCurrentVideo.title);

        if (oldPrevVideo) {
            newVideoList.unshift(oldPrevVideo);
        }

        this.setState({
            videoList: newVideoList,
            currentVideo: newCurrentVideo,
            prevVideo: newPrevVideo
        });
    }

    search(searchString) {
        if (searchString) {
            this.setState({ videoList: [] });
            this.loadVideos(SEARCH_URL, `q=${searchString}`);
        } else {
            this.setState({ videoList: [] });
            this.loadVideos(LIST_URL, "chart=mostPopular");
        }
    }

    render() {
        const { videoList, currentVideo, prevVideo } = this.state;

        if (!videoList.length) {
            return (
                <div className="row">
                    <div className="col-12">
                        <Search onSearch={this.search} />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-12">
                                <h3>Loading...</h3>
                            </div>
                            <div className="col-9">
                                <h5 className="mb-2 mt-2">Previous Video</h5>
                                <p>Loading...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <h2>Loading...</h2>
                    </div>
                </div>
            );
        }

        return (
            <div className="row">
                <div className="col-12">
                    <Search onSearch={this.search} />
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-12">
                            <VideoComponent key={currentVideo.id} data={currentVideo} current={true} previous={false} />
                        </div>
                        <div className="col-9">
                            <h5 className="mb-2 mt-2">Previous Video</h5>
                            <VideoComponent key={prevVideo.id} data={prevVideo} current={false} previous={true} moveToCurrentVideo={this.moveToCurrentVideo} />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    {videoList.map(video => <VideoComponent key={video.id} data={video} current={false} previous={false} moveToCurrentVideo={this.moveToCurrentVideo} />)}
                </div>
            </div>
        );
    }
}

export default HomePage;