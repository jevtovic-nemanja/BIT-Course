import React from "react";

import HomePage from "./homePage";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <HomePage />
            </div>
        );
    }
}

export default App;