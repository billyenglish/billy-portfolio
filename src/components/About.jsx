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
                        Hi, I&apos;m Billy English — a Software Engineer with hands-on experience in site operations at Twitter/X
                        and a passion for front-end development. I specialize in building clean, scalable applications using JavaScript,
                        TypeScript, and React. Backed by certifications from Meta, Google, IBM, and Scrimba, I'm committed to continuous
                        learning and crafting user-friendly software that delivers real impact.
                    </p>

                    <p className="about-paragraph">
                        I&apos;m currently open to software engineering opportunities — feel free to check out my projects below or connect
                        with me on <span><a href="/" className="linkedin">LinkedIn</a></span>.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default About;