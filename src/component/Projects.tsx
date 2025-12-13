import Nav from "./Nav";
import Footer from "./Footer";
import ProjectCards from "../subcomponent/ProjectCards";
import "../assets/styles/projects.css";
import "../assets/media_queries/projects_query.css"

type Project = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    sourceLinks: { id: number; linkText: string; href: string; }[];
    demoLink: { id: number; linkText: string; href: string }[];
}

const project: Project[] = [
    {
        id: 0,
        title: "Little Lemon",
        subtitle: "React, JavaScript, HTML5, CSS3",
        description: `
            A front-end restaurant website focused on responsive UI, accessibility,
            and interactive components. Users can browse menu sections, explore the
            brand story, and navigate a clean, modern layout optimized for all screen
            sizes.
        `,
        sourceLinks: [
            { id: 0, linkText: "Source Code", href: "https://github.com/billyenglish/little-lemon" }
        ],
        demoLink: [
            { id: 0, linkText: "Live Demo", href: "https://billyenglish.github.io/little-lemon/" }
        ]
    },
    {
        id: 1,
        title: "Resume Builder",
        subtitle: "React, JavaScript, HTML5, TailwindCSS",
        description: `
            Created a React resume builder web app that streamlines resume creation with live previews,
            template customization, and PDF downloads, emphasizing usability and responsive design.
        `,
        sourceLinks: [
            { id: 0, linkText: "Source Code", href: "https://github.com/billyenglish/resume-builder" }
        ],
        demoLink: [
            { id: 0, linkText: "Live Demo", href: "https://buildyourresumeapp.netlify.app/" },
        ]
    }
]

const Projects = () => {

    return (
        <>
            <Nav />
            <section id="projects_section" className="main_section">
                <h3 className="section_title project_title">
                    My Projects
                </h3>

                <div id="project_container">

                    {project.map((projects) => (
                        <ProjectCards
                            key={projects.id}
                            title={projects.title}
                            subtitle={projects.subtitle}
                            description={projects.description}
                            sourceLink={projects.sourceLinks}
                            demoLink={projects.demoLink}
                        />
                    ))}

                </div>
            </section>
            <Footer />
        </>
    );
};

export default Projects;