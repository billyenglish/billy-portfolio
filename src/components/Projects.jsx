import "../assets/styles/project.css";
import "../media_queries/project_media_query.css";
import ProjectCard from "../subcomponents/ProjectCard";
import Button from "../subcomponents/Button";

const Projects = () => {

    return (
        <section className="projects-section" id="projects-section">
            <h3 className="projects-title">
                Projects
            </h3>

            <div className="projects-container">
                <ProjectCard />
            </div>

            <div className="see-more-container">
                <Button
                    content="See More"
                    className="see-more-button"
                />
            </div>
        </section>
    );
};

export default Projects;