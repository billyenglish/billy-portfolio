import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Home = () => {

    const [currentTime, setCurrentTime] = useState(new Date());
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const currentMousePosition = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }


        window.addEventListener('mousemove', currentMousePosition);
        return (() => {
            window.removeEventListener('mousemove', currentMousePosition);
        });
    }, []);

    const mouseTracker = {
        position: 'fixed',
        top: mousePosition.y,
        left: mousePosition.x,
        transform: 'translate(-50%, -50%)', // centers the element on the cursor
        width: '20px',
        height: '20px',
        backgroundColor: 'blue',
        borderRadius: '50%',
        pointerEvents: 'none', // ensures it doesn't block mouse interactions
        zIndex: 1000,
    }

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
        });
    };

    return (
        <section className="home-section">
            <h2 className="author-name">Billy English</h2>
            <h4 className="professional-title">Software Engineer</h4>

            <div className="contact-menu">
                <ul className="contact-list">
                    <li className='list-item'><a href="/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                    <li className='list-item'><a href="/"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li className="list-item"><a href="/"><FaEnvelope /></a></li>
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