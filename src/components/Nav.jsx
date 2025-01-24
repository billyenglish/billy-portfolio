const Nav = () => {
    return (
        <header>
            <nav>
                <div>
                    <h1 id="logo">billyenglish</h1>
                </div>

                <div>
                    <ul className="nav-list">
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