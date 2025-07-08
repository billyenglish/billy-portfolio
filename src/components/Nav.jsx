import "../assets/styles/nav.css";
import "../media_queries/nav_media_query.css";
import { FaBars, FaCode } from 'react-icons/fa';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FaX } from "react-icons/fa6";
import { useState } from "react";

const Nav = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleMenuOpen = () => {
        setOpenMenu(openMenu => !openMenu);
    }

    const toggleLightDark = () => {
        setDarkMode(darkMode => !darkMode);
    }

    const navItems = [
        {
            name: "Home",
            id: 1
        },
        {
            name: "About",
            id: 2
        },
        {
            name: "Projects",
            id: 3
        },
        {
            name: "Skills",
            id: 4
        },
        {
            name: "Contact",
            id: 5
        }
    ];

    return (
        <nav>
            <div className="nav-logo-container">
                <h1 className="nav-logo">
                    <a href="/">billy</a>
                </h1>
            </div>

            <div className="nav-desktop-container">
                <ul className="nav-desktop-list">
                    {navItems.map((items) => (
                        <li
                            className="nav-desktop-item"
                            key={items.id}
                        >
                            <a href="/">
                                <FaCode size={18} className="link-icon" />
                                {items.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="theme-toggle" onClick={toggleLightDark}>
                    {
                        darkMode ? <MdOutlineDarkMode size={24} /> : <MdOutlineLightMode size={24} />
                    }
                </div>
            </div>

            <div className={`nav-mobile-container ${openMenu ? "show" : ""}`}>
                <ul className="nav-mobile-list">
                    {navItems.map((items) => (
                        <li
                            className="nav-mobile-item"
                            key={items.id}
                        >
                            <FaCode size={20} className="link-icon" />
                            {items.name}
                         </li>
                    ))}
                </ul>
            </div>

            <div className="hamburger-menu" onClick={toggleMenuOpen}>
                {
                    !openMenu ? <FaBars size={24} /> : <FaX size={22} />
                }
            </div>
        </nav>
    );
};

export default Nav