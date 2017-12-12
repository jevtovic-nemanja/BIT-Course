import React from "react";
import PropTypes from "prop-types";

const Child = props => {
    return (
        <p>Child component: {props.message}</p>
    );
};

Child.defaultProps = {
    message: "I am Child.(default)"
};

export default Child;