import CardButtonLinks from "./CardButtonLinks"
import type { FC } from "react";

type CardProps = {
    title: string;
    subtitle: string;
    description: string;
    className?: string;
    sourceCode?: string;
    href?: string;
}

const SourceCodeLinks = [
    { linkText: 'Source Code', href: "/", id: 0 }
];

const LiveDemoLinks = [
    { linkText: 'Live Code', href: "/", id: 0}
]

const ProjectCard: FC<CardProps> = ({ title, subtitle, description, }) => {

    return (
        <div className="project_card">
            <h4 className="card_title">
                {title}
            </h4>

            <h5 className="card_subtitle">
                <span className="tech_stack">
                    Tech Stack:
                </span> {subtitle}
            </h5>

            <p className="project_description">
                <span>
                    Description
                </span> {description}
            </p>

            <div className="project_control_panel">
                {
                    SourceCodeLinks.map((currentLinks) => (
                        <CardButtonLinks
                            linkText="Source Code"
                            href={currentLinks.href}
                            className="project_button"
                        />
                    ))
                }

                {
                    LiveDemoLinks.map((currentLinks) => (
                        <CardButtonLinks
                            linkText="Live Demo"
                            href={currentLinks.href}
                            className="project_button"
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default ProjectCard;