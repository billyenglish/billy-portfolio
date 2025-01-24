import { FaLinkedin, FaGithub, FaEnvelopeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="section home-section">
            <div className="home-introduction">
                <h2 className="home-title">
                    Billy English
                </h2>
                <h3 className="author-title">
                    Software Engineer | Front End Developer
                </h3>

                <p className="author-introduction">
                </p>
            </div>

            <div className="my-links">
                <Link to="/"><FaLinkedin size={50} /></Link>
                <Link to="/"><FaGithub size={50} /></Link>
                <Link to="/"><FaEnvelopeSquare size={50} /></Link>
            </div>
        </section>
    )
}

export default Home;