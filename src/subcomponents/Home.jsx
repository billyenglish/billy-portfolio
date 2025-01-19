import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaMicrosoft, FaMedium } from "react-icons/fa6";

const Home = () => {
    return (
        <section className="hero-section">
            <div className="portfolio-intro">
                <h2 id="portfolio-author">Billy English</h2>

                <h3 id="career-title">Software Engineer | Front-End Developer</h3>

                <p id="author-heading">Welcome to my portfolio</p>

                <div className="my-links">
                    <FaLinkedin size={30} />
                    <FaGithub size={30} />
                    <FaMicrosoft size={30} />
                    <FaMedium />
                </div>
            </div>
        </section>
    );
};

export default Home;