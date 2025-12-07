import Nav from "./Nav";
import Footer from "./Footer";
import ProjectCards from "../subcomponent/ProjectCards";
import "../assets/styles/projects.css";
import "../assets/media_queries/projects_query.css"

const Projects = () => {

    return (
        <>
            <Nav />
            <section id="projects_section" className="main_section">
                <h3 className="section_title project_title">
                    My Projects
                </h3>

                <div id="project_container">

                    <ProjectCards
                        title="Little Lemon"
                        subtitle="React, JavaScript, HTML5, CSS3"
                        description="
                            A front-end restaurant website focused on responsive UI, accessibility,
                            and interactive components. Users can browse menu sections, explore the
                            brand story, and navigate a clean, modern layout optimized for all screen
                            sizes.
                        "
                    />

                    <ProjectCards
                        title="Resume Builder"
                        subtitle="React, HTML, JavaScript, and TailwindCSS"
                        description="
                            An interactive resume builder that lets users generate a professional resume
                            with real-time preview. The project uses reusable React components, efficient
                            state management, and TailwindCSS.
                        "
                    />

                </div>
            </section>
            <Footer />
        </>
    );
};

export default Projects;