import React from "react";

import WeatherTable from "./table";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <WeatherTable />
            </div>
        );
    }
}

export default App;