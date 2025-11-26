import "../assets/styles/about_me.css";
import Nav from "./Nav";
import Footer from "./Footer";
import aboutMeImage from "../assets/images/billyenglish.jpeg";

const AboutMe = () => {

    return (
        <>
            <Nav />
            <section
                id="about_me_section"
                className="section_content"
            >
                <h3 className="section_title">
                    About Me
                </h3>
                <div id="about_me_section_content">
                    <article id="about_me_image_content">
                        <img
                            src={aboutMeImage}
                            id="about_me_image"
                        />
                    </article>
                    <article id="about_me_intro">
                        <h4 className="article_title">
                            Software Engineer | Leveraging Data Center Experience to Build Reliable Apps
                        </h4>

                        <div id="about_me_paragraph_container">
                            <p className="about_me_paragraph">
                                I'm a software engineer with a strong foundation in both systems and application
                                development. My career started in data center operations at Twitter, where I gained
                                hands-on experience ensuring performance, reliability, and scalability at a massive
                                scale. That experience taught me the importance of precision, monitoring, and building
                                systems that just work.
                            </p>

                            <p className="about_me_paragraph">
                                After transitioning into software, I focused on modern web and back-end technologies,
                                working with JavaScript, TypeScript, React, Tailwind CSS, Node.js, C#, and Java, with
                                experience in SQL and NoSQL databases. I've completed certifications through Meta and
                                Google and continue to sharpen my skills through The Odin Project and hands-on development.
                            </p>

                            <p className="about_me_paragraph">
                                I'm passionate about creating functional, user-friendly applications and am seeking
                                opportunities to collaborate on meaningful projects while growing as a full-stack
                                engineer <span id="linkedin"><a href="#">LinkedIn</a></span>.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default AboutMe;