import "../assets/styles/project_card.css";
import "../media_queries/projects_card_media_query.css";
import projectDescription from "./ProjectDescription";

const ProjectCard = () => {

    return (
        <>
            {projectDescription.map((projects) => (
                <div className="project-card" key={projects.id}>
                    <div className="project-image-container">
                        <img
                            src={projects.image}
                            alt="Placeholder Image"
                            className="project-image"
                            loading="lazy"
                        />
                    </div>
                    <div className="project-text-container">
                    <h4 className="project-title">
                        {projects.title}
                    </h4>
                    <p className="project-description">
                        {projects.description}
                    </p>
                    <div className="project-controls">
                        <button>Source Code</button>
                        <button>View Project</button>
                </div>
            </div>
        </div>
            ))}
        </>
    )
}

export default ProjectCard;