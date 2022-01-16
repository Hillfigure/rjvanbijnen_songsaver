import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <nav>
            <FontAwesomeIcon icon={faSort} />
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    )
};

export default Header