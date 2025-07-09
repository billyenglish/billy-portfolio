import "../assets/styles/about.css";
import "../media_queries/about_me_media_query.css";
import aboutImage from "../assets/images/billyenglish.jpeg";

const About = () => {

    return (
        <section className="about-section" id="about-section">

            <h3 className="about-title">
                About Me
            </h3>

            <div className="about-me-container">
                <div className="about-image-container">
                    <div className="image-container">
                        <img
                            src={aboutImage}
                            alt="About Me Image of Billy English"
                            className="about-image"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="about-text-container">
                    <h4 className="about-intro">
                        Software Engineer Leveraging Data Center Experience to Build Reliable Apps
                    </h4>

                    <p className="about-paragraph">
                        I'm a front-end software engineer with a passion for creating clean, user-friendly interfaces. My journey began in data
                        center operations at Twitter, where I developed a deep appreciation for systems, precision, and performance. After transitioning
                        back into software, I focused on modern web technologies—building projects with JavaScript, TypeScript, React, and Tailwind CSS.
                    </p>

                    <p className="about-paragraph">
                        I've completed certifications through Meta and Google, and continue to sharpen my skills through The Odin Project and hands-on
                        development. Whether it's crafting responsive layouts or solving complex UI challenges, I'm always learning and striving to build
                        things that are both functional and beautiful.
                    </p>

                    <p className="about-paragraph">
                        I'm currently open to software engineering roles where I can collaborate, grow, and contribute to meaningful projects
                        <span><a href="/" className="linkedin">LinkedIn</a></span>.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default About;