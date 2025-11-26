import Nav from "./Nav";
import Footer from "./Footer";
import Button from "../subcomponent/Button";
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
                    <div className="project_card">
                        <h4 className="card_title">
                            Project Title
                        </h4>

                        <h5 className="card_subtitle">
                            <span className="tech_stack">
                                Tech Stack:
                            </span> Tech Stack: HTML, CSS, JavaScript, React, Tailwind CSS
                        </h5>

                        <p className="project_description">
                            <span></span> A responsive single-page e-commerce application that
                            allows users to browse products, view detailed descriptions, and
                            add items to a shopping cart. Integrated interactive UI components,
                            mobile-first design, and basic cart functionality using React state
                            management.
                        </p>

                        <div className="project_control_panel">
                            <Button
                                text="Source Code"
                                className="project_button"
                            />

                            <Button
                                text="Live Demo"
                                className="project_button"
                            />
                        </div>
                    </div>

                    <div className="project_card">
                        <h4 className="card_title">
                            Project Title
                        </h4>

                        <h5 className="card_subtitle">
                            <span className="tech_stack">
                                Tech Stack:
                            </span> Tech Stack: HTML, CSS, JavaScript, React, Tailwind CSS
                        </h5>

                        <p className="project_description">
                            <span></span> A responsive single-page e-commerce application that
                            allows users to browse products, view detailed descriptions, and
                            add items to a shopping cart. Integrated interactive UI components,
                            mobile-first design, and basic cart functionality using React state
                            management.
                        </p>

                        <div className="project_control_panel">
                            <Button
                                text="Source Code"
                                className="project_button"
                            />

                            <Button
                                text="Live Demo"
                                className="project_button"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Projects;