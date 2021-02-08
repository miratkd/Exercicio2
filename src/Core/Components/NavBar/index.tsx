import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.scss';

const NavBar = () => (

    <nav className="navbar-container">
        <Link to="/" className="navbar-link">
            <h1 className="navbar-title">
                Bootcamp DevSuperior
            </h1>
        </Link>
    </nav>
);

export default NavBar;