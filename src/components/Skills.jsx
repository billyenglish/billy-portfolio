import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faPython, faJava, faNodeJs, faFigma, faLinux, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { SiTypescript, SiC, SiReact, SiTailwindcss, SiSass, SiBootstrap, SiRedux, SiVite, SiWebpack } from 'react-icons/si';

const Skills = () => {

    const frontendLanguages = [
        { skillIcon: <FontAwesomeIcon icon={faHtml5} />, skillName: "HTML", id: 0 },
        { skillIcon: <FontAwesomeIcon icon={faCss3Alt} />, skillName: "CSS", id: 1 },
        { skillIcon: <FontAwesomeIcon icon={faJs} />, skillName: "JavaScript", id: 2 },
        { skillIcon: <SiTypescript />, skillName: "TypeScript", id: 3 },
        { skillIcon: <SiC />, skillName: "C", id: 4 },
        { skillIcon: <FontAwesomeIcon icon={faPython} />, skillName: "Python", id: 5 },
        { skillIcon: <FontAwesomeIcon icon={faJava} />, skillName: "Java", id: 6 },
    ];

    const frameworkLanguages = [
        { skillIcon: <SiReact />, skillName: "React", id: 0 },
        { skillIcon: <SiTailwindcss />, skillName: "Tailwind", id: 1 },
        { skillIcon: <SiSass />, skillName: "Sass", id: 2 },
        { skillIcon: <SiBootstrap />, skillName: "Bootstrap", id: 3 },
        { skillIcon: <SiRedux />, skillName: "Redux", id: 4 },
        { skillIcon: <FontAwesomeIcon icon={faNodeJs} />, skillName: "Node", id: 5 },
        { skillIcon: <SiVite />, skillName: "Vite", id: 6 },
    ];

    const softwareTools = [
        { skillIcon: <FontAwesomeIcon icon={faFigma} />, skillName: "Figma", id: 0 },
        { skillIcon: <SiWebpack />, skillName: "Webpack", id: 1 },
        { skillIcon: <FontAwesomeIcon icon={faLinux} />, skillName: "Linux", id: 2 },
        { skillIcon: <FontAwesomeIcon icon={faGitAlt} />, skillName: "Git", id: 3 },
    ];

    return (
        <section className="skills-section" id="skills">
            <h3 className="section-title">Skills</h3>

            <div className="skills-container">

                <div className="software-skills">

                    <h4 className="my-skill">languages</h4>

                    <div className="skill-cards-container">

                        {
                            frontendLanguages.map((skills) => {
                                return (
                                    <div key={skills.id} className="skill-card">
                                        <div className="skill-icon">
                                            {skills.skillIcon}
                                        </div>
                                        <h5 className="skill-title">{skills.skillName}</h5>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className="software-skills">
                    <h4 className="my-skill">Frameworks</h4>

                    <div className="skill-cards-container">

                        {
                            frameworkLanguages.map((skills) => {
                                return (
                                    <div key={skills.id} className="skill-card">
                                        <div className="skill-icon">
                                            {skills.skillIcon}
                                        </div>
                                        <h5 className="skill-title">{skills.skillName}</h5>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className="software-skills">
                    <h4 className="my-skill">Software Tools</h4>


                    <div className="skill-cards-container">
                        {
                            softwareTools.map((skills) => {
                                return (
                                    <div key={skills.id} className="skill-card">
                                        <div className="skill-icon">
                                            {skills.skillIcon}
                                        </div>
                                        <h5 className="skill-title">{skills.skillName}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Skills;