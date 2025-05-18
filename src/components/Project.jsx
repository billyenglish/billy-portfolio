import { FaGithub } from "react-icons/fa";

const projectCardDetails = [
    {
        image: "https://placehold.co/600x400",
        title: "Calculator App",
        description: `
            Calculator Application is a web-based tool built with HTML, CSS, and
            JavaScript that allows users to perform basic arithmetic operations
            like addition, subtraction, multiplication, and division. It features
            a user-friendly interface with interactive buttons and dynamic calculations.
        `,
        id: 1,
    },
    {
        image: "https://placehold.co/600x400",
        title: "Calculator App",
        description: `
            Calculator Application is a web-based tool built with HTML, CSS, and
            JavaScript that allows users to perform basic arithmetic operations
            like addition, subtraction, multiplication, and division. It features
            a user-friendly interface with interactive buttons and dynamic calculations.
        `,
        id: 2,
    },
    {
        image: "https://placehold.co/600x400",
        title: "Calculator App",
        description: `
            Calculator Application is a web-based tool built with HTML, CSS, and
            JavaScript that allows users to perform basic arithmetic operations
            like addition, subtraction, multiplication, and division. It features
            a user-friendly interface with interactive buttons and dynamic calculations.
        `,
        id: 3,
    }
];

const Projects = () => {

    return (
        <section className="projects-section">
            <h3 className="section-title">Projects</h3>

            <div className="project-container">

                {projectCardDetails.map((projectCards) => (
                    <div className="project-card" key={projectCards.id}>
                        <div className="project-image">
                            <img
                                src={projectCards.image}
                                height="200"
                                width="250"
                                className="project-images"
                            />
                        </div>
                        <div className="project-card-title">
                            <h4 className="project-title">{projectCards.title}</h4>
                        </div>
                        <div className="project-details">
                            <p className="project-description">
                                {projectCards.description}
                            </p>
                        </div>
                        <div className="project-card-controls">
                            <div>
                                <i className="project-icon"><FaGithub /></i>
                            </div>

                            <div>
                                <button className="project-button">
                                    Source Code
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;