import "../assets/styles/home.css";
import "../media_queries/home_media_query.css";
import Button from "../subcomponents/Button";
import { HiArrowRight } from 'react-icons/hi';
import { IoMdArrowDown } from 'react-icons/io';

const contactItems = [
    { contactName: "LinkedIn", id: 1 },
    { contactName: "GitHub", id: 2 },
    { contactName: "Email", id: 3 }
];

const Home = () => {

    return (
        <section className="home-section" id="home-section">
            <div className="home-container">
                <h2 className="home-title">
                    Hi, I&apos;m Billy — a Software Engineer who builds with purpose.
                </h2>
                <p className="home-description">
                   I enjoy crafting clean, responsive front-ends with React and TypeScript, and I’m just as comfortable working with Node.js, APIs, and databases. I bring a problem-solving mindset shaped by real-world experience at Twitter and a passion for continuous learning.
                </p>

                <div className="home-btn-container">
                    <button className="learn-more-btn">
                        <HiArrowRight size={18} />
                        Learn More
                    </button>
                </div>

                <div className="contact-container">
                    <ul className="contact-list">
                       {contactItems.map((item) => (
                            <li className='contact-item' key={item.id}>
                                <a className="contact-link">{item.contactName}</a>
                            </li>
                       ))}
                    </ul>
                </div>
            </div>

            <Button
                className="scroll-down-container"
                content={<IoMdArrowDown className="arrow-icon" size={24} />}
            />
        </section>
    );
}

export default Home;