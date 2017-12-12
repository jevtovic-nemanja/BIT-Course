import React from "react";

import Slider from "react-slick";

import { NextArrow } from "./next";
import { PrevArrow } from "./previous";

class MySlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.changeCity = this.changeCity.bind(this);
    }

    changeCity(event) {
        event.preventDefault();

        const city = event.target.textContent;

        this.props.changeMap(city);
    }

    render() {
        return (
            <div className="mt-5 col-sm-10 mx-auto text-center">
                <Slider
                    arrows={true}
                    slidesToShow={3}
                    slidesToScroll={3}
                    speed={500}
                    infinite={true}
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                    dots={true}
                    responsive={[{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }]}
                >
                    <div onClick={this.changeCity}><h3>Belgrade</h3></div>
                    <div onClick={this.changeCity}><h3>Bucharest</h3></div>
                    <div onClick={this.changeCity}><h3>Budapest</h3></div>
                    <div onClick={this.changeCity}><h3>Ljubljana</h3></div>
                    <div onClick={this.changeCity}><h3>Podgorica</h3></div>
                    <div onClick={this.changeCity}><h3>Rome</h3></div>
                    <div onClick={this.changeCity}><h3>Skopje</h3></div>
                    <div onClick={this.changeCity}><h3>Zagreb</h3></div>
                </Slider>
            </div>
        );
    }
}

export default MySlider;