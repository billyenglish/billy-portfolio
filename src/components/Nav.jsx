import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const navLinks = [
    {linkName: "Home", id: 0},
    {linkName: "About", id: 1},
    {linkName: "Skills", id: 2},
    {linkName: "Projects", id: 3},
    {linkName: "Contact", id: 4},
];

const Nav = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuToggle = () => {

        if (openMenu) {
            console.log("Menu closed");
        } else {
            console.log("Menu opened");
        }

        setOpenMenu(!openMenu);

    }

    return (
        <nav className="nav-container">
            <div className="nav-logo-container">
                <h1 className="nav-logo">Billy</h1>
                <p className="professional-logo">Software Engineer</p>
            </div>

            <div className={`nav-list-container ${openMenu ? "active" : ""}`}>
                <ul className="nav-list">
                    {navLinks.map((link) => {
                        return <li key={link.id}><a href="/">{link.linkName}</a></li> 
                    })}
                </ul>
            </div>

            <div onClick={handleMenuToggle} className="ham-menu">
                {openMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
            </div>
        </nav>
    );
};

export default Nav;