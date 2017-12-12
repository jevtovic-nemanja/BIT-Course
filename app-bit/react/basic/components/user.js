import React from "react";
import Child from "./child";

const User = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>Age: {new Date().getFullYear() - parseInt(props.yearOfBirth)}</h3>
            
            <Child message="First child" />
            <Child />
            <Child message={new Date().getMilliseconds()} />
        </div>
    );
};

export default User;