import Nav from "./Nav";
import Footer from "./Footer";
import Button from "../subcomponent/Button";
import currentRoute from "../subcomponent/CurrentNavigation";

const Homepage = () => {

    const getRoute = currentRoute();

    return (
        <>
            <Nav />
            <section id="homepage_section">
                <div id="homepage_content">
                    <h2 id="homepage_title">
                        Billy English
                    </h2>
                    <h3 id="homepage_subtitle">
                        "I build full-stack web apps with React, TypeScript, Node.js, and SQL — focusing
                        on clean code and smooth user experiences. Off the clock, I'm into movies, sports,
                        and gaming."
                    </h3>
                    <div id="homepage_controls">
                        <Button
                            text="See My Projects"
                            className="homepage_button"
                            id="see_my_projects"
                            onClick={() => getRoute('/projects')}
                        />
                        <Button
                            text="Learn More"
                            className="homepage_button"
                            id="learn_more"
                            onClick={() => getRoute('/about_me')}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Homepage;