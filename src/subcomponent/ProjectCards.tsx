import Button from "../subcomponent/Button";
import type { FC } from "react";

type CardProps = {
    title: string;
    subtitle: string;
    description: string;
}

const ProjectCard: FC<CardProps> = ({ title, subtitle, description, }) => {

    return (
        <div className="project_card">
            <h4 className="card_title">
                {title}
            </h4>

            <h5 className="card_subtitle">
                <span className="tech_stack">
                    Tech Stack:
                </span> Tech Stack: {subtitle}
            </h5>

            <p className="project_description">
                <span>
                    Description
                </span> {description}
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
    );
};

export default ProjectCard