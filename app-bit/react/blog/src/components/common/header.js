import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Blog</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/createNewPost">Compose</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;