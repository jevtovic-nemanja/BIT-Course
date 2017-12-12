import React from "react";

const goBack = () => window.history.back();

const Back = () => {
    return <button onClick={goBack}>Back</button>;
};

export default Back;