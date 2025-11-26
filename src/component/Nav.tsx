import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import { MdOutlineArrowOutward } from "react-icons/md";
import Button from "../subcomponent/Button";
import { Link } from "react-router-dom";
import "../assets/styles/nav.css";

const Nav = () => {

    const [navMenu, setNavMenu] = useState(false);
    const [themeMode, setThemeMode] = useState(true);

    const handleNavMenu = () => {
        setNavMenu(prevNav => !prevNav);
    }

    const handleThemeMode = () => {
        setThemeMode(prevTheme => !prevTheme);
    }

    type NavType = {
        navItem: string;
        navLink: string;
        id: number;
    }

    const navMenuItem: NavType[] = [
        {
            navItem: "00 Home",
            navLink: "/",
            id: 0
        },
        {
            navItem: "01 About Me",
            navLink: "/about_me",
            id: 1
        },
        {
            navItem: "02 Projects",
            navLink: "/projects",
            id: 2
        },
        {
            navItem: "03 Skills",
            navLink: "/skills",
            id: 3
        },
        {
            navItem: "04 Contact Me",
            navLink: "/contact_me",
            id: 4
        }
    ];

    return (
        <nav>
            <div>
                <h1 id="nav_logo">
                    <Link to="/">
                        billy english
                    </Link>
                </h1>
            </div>

            <div>
                <ul className="nav_list_menu_buttons">
                    <li>
                        <Button
                            icon={ navMenu ? <CgClose size={30} /> : <CgMenuGridO size={30} /> }
                            className="nav_menu_button"
                            onClick={handleNavMenu}
                        />
                    </li>
                    <li>
                        <Button
                            icon={ themeMode ? <FaMoon size={22} /> : <IoSunny size={30} /> }
                            className="nav_menu_button"
                            onClick={handleThemeMode}
                        />
                    </li>
                </ul>
            </div>

            <div id={ navMenu ? "nav_desktop_menu_open" : "nav_desktop_menu" }>
                <ul id="nav_desktop_list">
                    {navMenuItem.map((currentItems) => (
                        <li
                            className="list_item"
                            key={currentItems.id}>
                                <Link to={currentItems.navLink}>
                                    {currentItems.navItem}
                                </Link>
                        </li>
                    ))}
                    <ul className="nav_desktop_sub_list">
                        <li className="list_sub_item">
                            <a
                                className="list_sub_item_link"
                                href="https://www.linkedin.com/in/billyenglish">
                                <span>
                                    <MdOutlineArrowOutward />
                                </span>
                                LinkedIn
                            </a>
                        </li>
                        <li className="list_sub_item">
                            <a
                                className="list_sub_item_link"
                                href="https://github.com/billyenglish"
                            >
                                <span>
                                    <MdOutlineArrowOutward />
                                </span>
                                Github
                            </a>
                        </li>
                    </ul>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;