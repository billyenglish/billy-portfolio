import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const navLinks = [
    {linkName: "Home", id: 0},
    {linkName: "About", id: 1},
    {linkName: "Skills", id: 2},
    {linkName: "Projects", id: 3},
    {linkName: "Contact", id: 4},
];

const Nav = () => {
    return (
        <nav className="nav-container">
            <div className="nav-logo-container">
                <h1 className="nav-logo">Billy E</h1>
                <p className="professional-logo">Software Engineer</p>
            </div>

            <div className="nav-list-container">
                <ul className="nav-list">
                    {navLinks.map((link) => {
                        return <li key={link.id}>{link.linkName}</li> 
                    })}
                </ul>
            </div>

            <div className="ham-menu" onClick={() => alert("Hello World")}>
                <GiHamburgerMenu className="ham-icon" />
            </div>
        </nav>
    );
};

export default Nav;