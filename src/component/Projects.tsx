import Nav from "./Nav";
import Footer from "./Footer";
import ProjectCards from "../subcomponent/ProjectCards";
import "../assets/styles/projects.css";

const Projects = () => {

    return (
        <>
            <Nav />
            <section id="projects_section" className="main_section">
                <h3 className="section_title">
                    My Projects
                </h3>

                <div id="project_container">

                    <ProjectCards
                        title="Calculator"
                        subtitle="Simple Calculator"
                        description="
                            Calculator Application is a web-based tool built with HTML, CSS,
                            and JavaScript that allows users to perform basic arithmetic operations
                            like addition, subtraction, multiplication, and division. It features a
                            user-friendly interface with interactive buttons and dynamic calculations.
                        "
                    />

                    <ProjectCards
                        title="Resume Builder"
                        subtitle=""
                        description="
                        "
                    />

                </div>
            </section>
            <Footer />
        </>
    );
};

export default Projects;