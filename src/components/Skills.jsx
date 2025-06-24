import "../assets/styles/skills.css";
import "../media_queries/skills_media_query.css";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiVite, SiC, SiWebpack, SiExpress, SiMysql, SiJest, SiJira } from "react-icons/si";
import { FaReact, FaNodeJs, FaSass, FaBootstrap, FaJava  } from "react-icons/fa";
import { FaLinux, FaGithub, FaFigma } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import SkillsCard from "../subcomponents/SkillsCard";

const skillsLanguages = [
    { icon: SiHtml5, name: "HTML", id: 0 },
    { icon: SiCss3, name: "CSS", id: 1 },
    { icon: SiJavascript, name: "JavaScript", id: 2 },
    { icon: SiTypescript, name: "TypeScript", id: 3 },
    { icon: FaJava, name: "Java", id: 4 },
    { icon: IoLogoPython, name: "Python", id: 5 },
    { icon: SiC, name: "C", id: 6 },
];

const skillsFrameworks = [
    { icon: FaReact, name: "React", id: 0 },
    { icon: FaNodeJs, name: "Node.js", id: 1 },
    { icon: FaSass, name: "Sass", id: 2 },
    { icon: FaBootstrap, name: "Bootstrap", id: 3 },
    { icon: SiVite, name: "Vite", id: 4 },
    { icon: SiExpress, name: "JS Express", id: 5 },
    { icon: SiMysql, name: "MySQL", id: 6 },
];

const skillsTools = [
    { icon: FaLinux, name: "Linux", id: 0 },
    { icon: FaGithub, name: "Github", id: 1 },
    { icon: FaFigma, name: "Figma", id: 2 },
    { icon: SiWebpack, name: "Webpack", id: 3 },
    { icon: SiJest, name: "Jest", id: 4 },
    { icon: SiJira, name: "Jira", id: 5 },
];

const Skills = () => {

    return (
        <section className="skills-section" id="skills-section">
            <h3 className="skills-title section-title">Skills</h3>
            <div className="skills-container">

                <h4 className="frontend-title">Frontend</h4>

                <div className="my-skills">

                    {skillsLanguages.map((skill) => (
                        <SkillsCard
                            key={skill.id}
                            icon={skill.icon}
                            name={skill.name}
                            size={40}
                        />
                    ))}
                </div>


                <div className="my-skills">

                    {skillsFrameworks.map((skill) => (
                        <SkillsCard
                            key={skill.id}
                            icon={skill.icon}
                            name={skill.name}
                            size={40}
                        />
                    ))}
                </div>

                <h4 className="Tools Skills">Tools</h4>
                
                <div className="my-skills">

                    {skillsTools.map((skill) => (
                        <SkillsCard
                            key={skill.id}
                            icon={skill.icon}
                            name={skill.name}
                            size={40}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;