import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <header className="header-main">
            <Navbar></Navbar>
            <h1>Welcome To Antik's Comics Store</h1>
        </header>
    );
};

export default Header;