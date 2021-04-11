import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="home-nav">
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <button type="button" class="btn btn-danger">Login</button>
        </nav>
    );
};

export default Navbar;