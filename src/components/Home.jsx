import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaEnvelope } from 'react-icons/fa';


const Home = () => {
    return (
        <section className="home-section">
            <h2 className="author-name">Billy English</h2>
            <h4 className="professional-title">Software Engineer</h4>

            <div className="contact-menu">
                <ul className="contact-list">
                    <li><a href="/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="/"><FaEnvelope /></a></li>
                </ul>
            </div>

            <div className="light-dark-mode-container">
                <div className="lightmode-container">
                    <input type="checkbox" />
                    <p>Light Mode</p>
                </div>

                <div className="darkmode-container">
                    <input type="checkbox" />
                    <p>Dark Mode</p>
                </div>
            </div>
        </section>
    );
};

export default Home;