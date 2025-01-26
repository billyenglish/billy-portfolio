const Nav = () => {
    return (
        <header>
            <nav className="nav-menu">
                <div>
                    <h1 id="logo">billy english</h1>
                </div>

                <div className="nav-menu-list">
                    <ul className="nav-list mobile-list">
                        <li className="nav-item"><a href="#">Home</a></li>
                        <li className="nav-item"><a href="#">About</a></li>
                        <li className="nav-item"><a href="#">Projects</a></li>
                        <li className="nav-item"><a href="#">Skills</a></li>
                        <li className="nav-item"><a href="#">Contact Me</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav;