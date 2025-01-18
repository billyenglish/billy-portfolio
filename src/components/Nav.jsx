const Nav = () => {
    return (
        <>
            <header>
                <nav className="nav-menu">
                    <div className="logo">
                        <h1 id="logo">Billy E</h1>
                    </div>

                    <div className="nav-container">
                        <ul className="nav-list">
                            <li className="nav-item">Home</li>
                            <li className="nav-item">About</li>
                            <li className="nav-item">Projects</li>
                            <li className="nav-item">Skills</li>
                            <li className="nav-item">Contact Me</li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Nav;