import React from "react";
import Timer from "./timer";

const logTime = time => console.log(`tick...${time}`);

const Header = () => {
    return (
        <div>
            <Timer interval="1000" logger={logTime} />
        </div>
    );
};

export default Header;