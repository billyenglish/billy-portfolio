const navMenu = [
    {
        navTitle: "Home",
        navKey: "navHome"
    },
    {
        navTitle: "About",
        navKey: "navAbout",
    },
    {
        navTitle: "Project",
        navKey: "navProject"
    },
    {
        navTitle: "Skills",
        navKey: "navSkills"
    },
    {
        navTitle: "Contact Me",
        navKey: "navContact"
    }
];

const Nav = () => {
    return (
        <header>
            <nav>
                <div className="logo-container">
                    <h1 id="logo">billy.io</h1>
                </div>

                <div className="nav-list-container">
                    <ul className="nav-list">
                        {navMenu.map((navItems) => {
                            return <li key={navItems.navKey} className="nav-items">
                                {navItems.navTitle}
                            </li>
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav;