import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";

const Skills = () => {
    return (
        <section className="section section-skills">
            <h2 className="skills-section">My Skills</h2>

            <div className="skills-container">
                <FaHtml5 size={30} />
                <FaCss3Alt size={30} />
                <FaJs size={30} />
            </div>
        </section>
    )
}

export default Skills;