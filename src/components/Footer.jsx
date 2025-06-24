import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import "../media_queries/footer_media_query.css";
import "../assets/styles/footer.css";

const currentYear = new Date().getFullYear();

const contactItems = [
    { contactName: "LinkedIn", icon: <FaLinkedinIn />, id: 1 },
    { contactName: "GitHub", icon: <FaGithub />, id: 2 },
    { contactName: "Email", icon: <FaEnvelope />, id: 3 }
];

const Footer = () => {

    return (
        <footer>
            <div className="footer-copyright">
                <p>&copy; {currentYear} Billy English. All rights reserved.</p>
            </div>

            <div className="footer-contact-container">
                {contactItems.map((item) => (
                    <ul className="footer-contact-list">
                        <li className="footer-item" key={item.id}>
                            <a href="/">
                                {item.icon}
                            </a>
                        </li>
                    </ul>
                ))}
            </div>
        </footer>
    );
};

export default Footer;