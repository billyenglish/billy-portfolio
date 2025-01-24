import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const Skills = () => {
    return (
        <section className="section">
            <h2 className="section-title">Skills</h2>

            <div>
                <div className="skills-container">
                    <FaHtml5 size={44} />
                    <p>HTML</p>
                </div>
                <div className="skills-container">
                    <FaCss3Alt size={44} />
                    <p>CSS</p>
                </div>
                <div className="skills-container">
                    <FaJs size={44} />
                    <p>JavaScript</p>
                </div>
            </div>
        </section>
    )
}

export default Skills;