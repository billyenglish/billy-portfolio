import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import { MdOutlineArrowOutward } from "react-icons/md";
import Button from "../subcomponent/Button";
import { Link } from "react-router-dom";
import "../assets/styles/nav.css";
import "../assets/media_queries/nav_query.css"

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
        navPos: string;
        navItem: string;
        navLink: string;
        id: number;
    }

    const navMenuItem: NavType[] = [
        {   navPos: "00",
            navItem: "Home",
            navLink: "/",
            id: 0
        },
        {
            navPos: "01",
            navItem: "About Me",
            navLink: "/about_me",
            id: 1
        },
        {
            navPos: "02",
            navItem: "Projects",
            navLink: "/projects",
            id: 2
        },
        {
            navPos: "03",
            navItem: "Skills",
            navLink: "/skills",
            id: 3
        },
        {
            navPos: "04",
            navItem: "Contact Me",
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
                            icon={ navMenu ? <CgClose /> : <CgMenuGridO /> }
                            className="nav_menu_button"
                            onClick={handleNavMenu}
                        />
                    </li>
                    <li>
                        <Button
                            icon={ themeMode ? <FaMoon /> : <IoSunny /> }
                            className="nav_menu_button theme"
                            onClick={handleThemeMode}
                        />
                    </li>
                </ul>
            </div>

            <ul id={ navMenu ? "nav_menu_open" : "nav_menu_close" } className="nav_menu_list">
                {navMenuItem.map((currentItems) => (
                    <li
                        className="list_item"
                        key={currentItems.id}>
                            <Link to={currentItems.navLink}>
                                <span className="nav_pos">{currentItems.navPos}</span>
                                {currentItems.navItem}
                            </Link>
                    </li>
                ))}
                <ul className="nav_menu_sub_list">
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
        </nav>
    );
};

export default Nav;