import React from "react";

import Header from "./header";
import User from "./user";
import Pets from "./pets";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <User name="Djoka" yearOfBirth="1990" />
                <Pets area="54" />
                <Pets area="28" />
            </div>
        );
    }
}

export default App;