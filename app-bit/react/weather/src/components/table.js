import React from "react";

import { Sparklines, SparklinesLine } from "react-sparklines";
import axios from "axios";

import Weather from "./entities/weather";
import { Map } from "./map";
import { WEATHER_API_KEY, ON_LOAD_CITIES } from "./../constants";
import Search from "./search";

class WeatherTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();

        this.bindEventHandlers();
    }

    initState() {
        return {
            weather: [],
            search: false,
            error: ""
        };
    }

    componentDidMount() {
        this.loadData(ON_LOAD_CITIES);
    }

    bindEventHandlers() {
        this.search = this.search.bind(this);
    }

    handleNetworkRequestError(error) {
        if (error.response) {
            this.setState({ error: error.response.data.message });
        } else if (error.request) {
            this.setState({ error: "There is no response from server." });
        }
    }

    loadData(cities) {
        let citiesData = [];

        cities.map(city => {
            const cityData = axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`)
                .then(response => {
                    const { city, list } = response.data;
                    const temp = list.map(dt => dt.main.temp);
                    const humidity = list.map(dt => dt.main.humidity);
                    const weather = new Weather(city.id, city.name, city.coord.lon, city.coord.lat, temp, humidity);
                    return weather;
                })
                .catch(error => this.handleNetworkRequestError(error));
            citiesData.push(cityData);
        });

        Promise.all(citiesData)
            .then(data => {
                data
                    .sort()
                    .reverse()
                    .map(cityData => {
                        if (cityData) {
                            this.setState(prevState => {
                                prevState.weather.unshift(cityData);
                                return prevState;
                            });
                        }
                    });
            });
    }

    search(searchString) {
        const searchStringArray = [];

        if (searchString) {
            searchStringArray.push(searchString);
            if (this.state.search) {
                this.setState({ error: "" });
                this.loadData(searchStringArray);
            } else {
                this.setState({ search: true, weather: [], error: "" });
                this.loadData(searchStringArray);
            }
        } else {
            this.setState({ search: false, weather: [], error: "" });
            this.loadData(ON_LOAD_CITIES);
        }
    }

    render() {
        const { weather, error } = this.state;

        return (
            <div className="w-100">
                <Search onSearch={this.search} />

                <p className="text-center text-capitalize" style={{ color: "red" }}>{error}</p>

                {weather
                    .map(city => {
                        return (
                            <div key={city.id} className="row">
                                <div className="col-3 text-center" >
                                    <h3 className="ml-5">{city.name}</h3>
                                    <Map
                                        isMarkerShown
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                        loadingElement={<div style={{ height: "75%" }} />}
                                        containerElement={<div style={{ height: "20rem", width: "20rem" }} />}
                                        mapElement={<div style={{ height: "75%" }} />}
                                        lat={city.lat}
                                        lng={city.lng}
                                    />
                                </div>
                                <div className="col-4 offset-1 my-auto pb-5" >
                                    <h3 className="text-center">Temperature</h3>
                                    <Sparklines
                                        data={city.temp}
                                        width={70}
                                        height={20}
                                    >
                                        <SparklinesLine color="red" />
                                    </Sparklines>
                                </div>
                                <div className="col-4 my-auto pb-5">
                                    <h3 className="text-center">Humidity</h3>
                                    <Sparklines
                                        data={city.humidity}
                                        width={70}
                                        height={20}
                                    >
                                        <SparklinesLine color="blue" />
                                    </Sparklines>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default WeatherTable;