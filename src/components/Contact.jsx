import "../assets/styles/contact.css";
import "../media_queries/contact_me_media_query.css";
import Button from "../subcomponents/Button";

const Contact = () => {

    return (
        <section className="contact-section" id="contact-section">
            <h3 className="section-title contact-title">Contact</h3>

            {/*<p className="contact-description">
                I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>*/}

            <div className="contact-form-container">
                <form>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="user-input"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="user-input"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="user-input"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="textarea-input"
                        />
                    </div>
                    <div className="button-container">
                        <Button
                            className="form-button"
                            content="Clear" />
                        <Button
                            className="form-button"
                            content="Submit"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;