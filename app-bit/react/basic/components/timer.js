import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mountTime: "pending...",
            log: true
        };

        this.toggleLog = this.toggleLog.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ mountTime: new Date().toTimeString() });
            if (this.state.log) {
                this.props.logger(this.state.mountTime);
            }
        }, this.props.interval);
    }

    toggleLog() {
        this.setState(oldstate => ({log: !oldstate.log})); //this.setState({log: !this.state.log});
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleLog}>
                    {this.state.log ? "Stop log" : "Start log"}
                </button>
                <p>{this.state.mountTime}</p>
            </div>
        );
    }
}

export default Timer;