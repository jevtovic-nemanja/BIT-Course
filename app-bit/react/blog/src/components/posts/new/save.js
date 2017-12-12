import React from "react";

class Save extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();

        this.bindEventHandlers();
    }

    initState() {
        return {
            title: "",
            body: ""
        };
    }

    bindEventHandlers() {
        this.handleInputChange = this.handleInputChange.bind(this);
        this.executeSave = this.executeSave.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    executeSave(event) {
        event.preventDefault();
        this.props.notifyPostToServer(this.state);
    }

    render() {
        const title = this.state.title;
        const body = this.state.body;

        return (
            <form className="save">
                <label>Title: </label>
                <input type="text" name="title" value={title} onChange={this.handleInputChange} />
                <label>Post: </label>
                <textarea value={body} name="body" rows="15" cols="66" onChange={this.handleInputChange} ></textarea>
                <button onClick={this.executeSave} >Save</button>
            </form>
        );
    }
}

export default Save;