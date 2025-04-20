import aboutMeImage from "../assets/billyenglish.jpeg";

const About = () => {

    return (
        <section className="about-me-section" id="about-me-section">
            <div className="about-me-content about-me-content-left">
                <h3 className="about-me-title">About Me</h3>

                <div className="about-me-image-container">
                    <img
                        src={aboutMeImage}
                        alt="PlaceHolder"
                        className="about-me-image"
                    />
                </div>

            </div>

            <div className="about-me-content about-me-content-right">
                <p className="about-me-introduction">
                    Hey there—I&apos;m a Software Engineer whose journey began with a passion for software development,
                    but I later expanded my skill set by diving into hardware and system operations. My curiosity about
                    how things work led me to work with infrastructure and scripting, where I gained a deeper understanding
                    of the full tech stack. Today, I create responsive, user-friendly web applications using tools like JavaScript,
                    TypeScript, React, and leverage my experience with Python, C, Bash, and SQL to bring a well-rounded approach to
                    problem-solving. I&apos;m always learning and eager to bring my diverse skill set to a collaborative engineering team.
                </p>
            </div>
        </section>
    );
};

export default About;