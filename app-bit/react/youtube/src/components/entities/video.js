class Video {
    constructor(id, title, channelTitle, publishedAt, description) {
        this._id = id;
        this._title = title;
        this._channelTitle = channelTitle;
        this._publishedAt = publishedAt;
        this._description = description;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get channelTitle() {
        return this._channelTitle;
    }

    get publishedAt() {
        return this._publishedAt;
    }

    get description() {
        return this._description;
    }
}

export default Video;