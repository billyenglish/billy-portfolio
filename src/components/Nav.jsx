import "../assets/styles/nav.css";
import "../media_queries/nav_media_query.css";
import { FaBars, FaCode } from 'react-icons/fa';
import { MdOutlineLightMode } from "react-icons/md";

const Nav = () => {

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
                    {navItems.map((item) => (
                        <li className="nav-desktop-item" key={item.id}>
                            <a href="/">
                                <FaCode size={16} />
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="theme-toggle">
                    <MdOutlineLightMode size={24} />
                </div>
            </div>

            <div className="hamburger-menu" onClick={() => alert("Hello World")}>
                <FaBars />
            </div>
        </nav>
    );
};

export default Nav