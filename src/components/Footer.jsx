import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { footerIcon: <FontAwesomeIcon icon={faLinkedin} />, id: 0 },
        { footerIcon: <FontAwesomeIcon icon={faGithub} />, id: 1 },
        { footerIcon: <FaEnvelope />, id: 2 },
    ];

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section-left">
                    <p><span className="copyright">&copy;</span> {currentYear} Billy English. All rights reserved.</p>
                </div>

                <div className="footer-author-container">
                    <p>Designed and developed by Billy English</p>
                    <p>billyenglish6212&copy;outlook.com</p>
                </div>

                <div className="footer-section-right">
                    <ul className="footer-list">
                        {
                            footerLinks.map((links) => {
                                return (
                                    <li key={links.id}>
                                        {links.footerIcon}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;