const navItems = [
    {
        navTitle: "Home",
        navKey: "home"
    },
    {
        navTitle: "About",
        navKey: "about"
    },
    {
        navTitle: "Projects",
        navKey: "projects"
    },
    {
        navTitle: "Skills",
        navKey: "skills"
    },
    {
        navTitle: "Contact Me",
        navKey: "contact me"
    }
];


const Nav = () => {
    return (
        <>
            <header>
                <nav className="nav-menu">
                    <div className="logo">
                        <h1 id="logo">billyenglish</h1>
                    </div>

                    <div className="nav-container">
                        <ul className="nav-list">
                            {navItems.map((navItem, navKeys) => {
                                return <li className="nav-time" key={navKeys.navKeys}>{navItem.navTitle}</li>
                            })}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Nav;