import React from "react";
import Dog from "./dog";
import Aquarium from "./aquarium";

const Pets = props => {
    if (props.area > 50) {
        return (
            <div>
                <p>Your house is big enough for a dog!</p>
                <Dog />
            </div>
        );
    } else {
        return (
            <Aquarium area={props.area} colour="gold" />
        );
    }
};

export default Pets;