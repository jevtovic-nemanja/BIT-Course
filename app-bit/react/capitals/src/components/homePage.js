import React from "react";

import { Map } from "./map";
import MySlider from "./slider";
import { CITIES } from "./constants";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();

        this.bindEventHandlers();
    }

    initState() {
        return {
            city: "Belgrade"
        };
    }

    bindEventHandlers() {
        this.changeMap = this.changeMap.bind(this);
    }

    componentDidMount() {
        this.changeMap(this.state.city);
    }

    changeMap(cityName) {
        const city = CITIES[cityName];

        this.setState({ city: city });
    }


    render() {
        const { city } = this.state;

        return (
            <div className="row mt-5">
                <div className="mx-auto">
                    <h2>Pick a capital city!</h2>
                </div>
                <div className="col-lg-8 offset-lg-2 mt-5 col-md-10 offset-md-1">
                    <Map
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "500%", width: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        lat={city.lat}
                        lng={city.lng}
                    />
            
                    <MySlider changeMap={this.changeMap} />
                </div>
            </div>

        );
    }
}

export default HomePage;