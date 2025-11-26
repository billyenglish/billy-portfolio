import Nav from "./Nav";
import Footer from "./Footer";
import "../assets/styles/skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaBootstrap, FaNodeJs, FaPython, FaJava, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiGraphql, SiMongoose, SiC, SiVite, SiWebpack, SiJest } from "react-icons/si";
import { RiNextjsFill, RiTerminalBoxFill } from "react-icons/ri";
import { TbBrandNpm, TbBrandFigma } from "react-icons/tb";


const Skills = () => {

    type Skill = {
        icon: React.ReactNode;
        title: string;
        id: number;
    }

    const frontEndSkills: Skill[] = [
        {
            icon: <FaHtml5 />,
            title: 'Html',
            id: 0,
        },
        {
            icon: <FaCss3Alt />,
            title: 'CSS',
            id: 1
        },
        {
            icon: <FaJs />,
            title: 'JavaScript',
            id: 2
        },
        {
            icon: <SiTypescript />,
            title: 'TypeScript',
            id: 3
        },
        {
            icon: <FaReact />,
            title: 'React',
            id: 4
        },
        {
            icon: <SiTailwindcss />,
            title: 'Tailwind',
            id: 5
        },
        {
            icon: <FaSass />,
            title: 'Sass',
            id: 6
        },
        {
            icon: <FaBootstrap />,
            title: 'Bootstrap',
            id: 7
        }
    ];

    const backEndSkills: Skill[] = [
        {
            icon: <FaNodeJs />,
            title: 'Node.js',
            id: 0
        },
        {
            icon: <SiExpress />,
            title: 'Express.js',
            id: 1
        },
        {
            icon: <FaPython />,
            title: 'Python',
            id: 2
        },
        {
            icon: <SiMongodb />,
            title: 'MongoDb',
            id: 3
        },
        {
            icon: <FaJava />,
            title: 'Java',
            id: 4
        },
        {
            icon: <SiGraphql />,
            title: 'GraphQL',
            id: 5
        },
        {
            icon: <SiMongoose />,
            title: 'Mongoose',
            id: 6
        },
        {
            icon: <SiC />,
            title: 'C',
            id: 7
        }
    ];

    const devSkills: Skill[] = [
        {
            icon: <FaGithub />,
            title: 'Github',
            id: 0
        },
        {
            icon: <RiNextjsFill />,
            title: 'Next.js',
            id: 1
        },
        {
            icon: <SiVite />,
            title: 'Vite',
            id: 2
        },
        {
            icon: <SiWebpack />,
            title: 'Webpack',
            id: 3
        },
        {
            icon: <TbBrandNpm />,
            title: 'Npm',
            id: 4
        },
        {
            icon: <RiTerminalBoxFill />,
            title: 'CLI Terminal',
            id: 5
        },
        {
            icon: <TbBrandFigma />,
            title: 'Figma',
            id: 6
        },
        {
            icon: <SiJest />,
            title: 'Jest',
            id: 7
        }
    ]

    return (
        <>
            <Nav />
            <section id="skills_section" className="main_section">
                <h3 className="section_title">
                    Skills
                </h3>

                <div className="skills_container">
                    <div className="my_skills">
                        <h4 className="category_title">
                            Front-End Development
                        </h4>

                        <div className="my_skills_container">
                            {
                                frontEndSkills.map((currentSkills) => (
                                    <div
                                        key={currentSkills.id}
                                        className="skills_card"
                                    >
                                        <i className="skills_icon">
                                            {currentSkills.icon}
                                        </i>
                                        <p className="skill_title">
                                            {currentSkills.title}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="my_skills">
                        <h4 className="category_title">
                            Back-End Development
                        </h4>

                        <div className="my_skills_container">
                            {
                                backEndSkills.map((currentSkills) => (
                                    <div
                                        key={currentSkills.id}
                                        className="skills_card"
                                    >
                                        <i className="skills_icon">
                                            {currentSkills.icon}
                                        </i>
                                        <p className="skill_title">
                                            {currentSkills.title}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="my_skills">
                        <h4 className="category_title">
                            Dev Tools &amp; Workflow
                        </h4>

                        <div className="my_skills_container">
                            {
                                devSkills.map((currentSkills) => (
                                    <div
                                        key={currentSkills.id}
                                        className="skills_card"
                                    >
                                        <i className="skills_icon">
                                            {currentSkills.icon}
                                        </i>
                                        <p className="skill_title">
                                            {currentSkills.title}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
};

export default Skills;