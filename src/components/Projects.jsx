import "../assets/styles/project.css";
import "../assets/styles/project_card.css";
import "../media_queries/project_card_media_query.css";
import ProjectCard from "../subcomponents/ProjectCard";

const Projects = () => {

    return (
        <section className="projects-section" id="projects-section">
            <h3 className="projects-title section-title">
                Projects
            </h3>

            <div className="projects-container">
                <ProjectCard />
            </div>
        </section>
    );
};

export default Projects;