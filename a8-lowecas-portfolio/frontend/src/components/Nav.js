// Navigation from page to page

import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="../topics">Website Building Topics</Link>
            <Link to="../profile">Character Profile</Link>
            <Link to="../gallery">Design Gallery</Link>
            <Link to="../staff">Design Staff</Link>
            <Link to="../order">Product Order</Link>
        </nav>
    );
}

export default Nav;