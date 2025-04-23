import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Home = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const currentTimeInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(currentTimeInterval);
    }, []);

    const currentTimeFormat = (currentTime) => {
        return currentTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZone: 'America/New_York',
        })
    }

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
                    <button onClick={() => alert("Light Mode!")}>
                        Light Mode
                    </button>
                </div>

                <div className="darkmode-container">
                    <button onClick={() => alert("Dark Mode!")}>
                        Dark Mode
                    </button>
                </div>
            </div>

            <div className="current-time-container">
                {currentTimeFormat(currentTime)}
            </div>
        </section>
    );
};

export default Home;