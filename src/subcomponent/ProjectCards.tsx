import CardButtonLinks from "./CardButtonLinks"
import type { FC } from "react";

type Link = {
    id: number;
    linkText: string;
    href: string;
}

type CardProps = {
    title: string;
    subtitle: string;
    description: string;
    sourceLink: Link[];
    demoLink: Link[];
    className?: string;
}

const ProjectCard: FC<CardProps> = ({ title, subtitle, description, sourceLink, demoLink }) => {

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
                {sourceLink.map(link => (
                    <CardButtonLinks
                        key={link.id}
                        linkText={link.linkText}
                        href={link.href}
                        className="project_button project_links"
                    />
                ))}

                {demoLink.map(link => (
                    <CardButtonLinks
                        key={link.id}
                        linkText={link.linkText}
                        href={link.href}
                        className="project_button project_links"
                    />
                ))}
            
            </div>
        </div>
    );
};

export default ProjectCard;