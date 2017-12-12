import React from "react";
import Fish from "./fish";
import PropTypes from "prop-types";

const Aquarium = props => {
    let tank = [];
    for (let i = 0; i < props.area / 2; i++) {
        tank.push(<Fish key={i} />);
    }
    return (
        <div>
            <p>There are {tank.length} {props.colour} fish in the tank.</p>
            <div>{tank}</div>
        </div>
    );
};

Aquarium.propTypes = {
    colour: PropTypes.oneOf(["gold", "yellow"]).isRequired
};

export default Aquarium;