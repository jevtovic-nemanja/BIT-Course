import React from "react";

export const PrevArrow = props => {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: "block", background: "grey", borderRadius: "100%" }}
            onClick={onClick}
        ></div>
    );
};