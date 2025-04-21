const Contact = () => {
    return (
        <section className="contact-section" id="contact">``
            <h3 className="section-title">Contact</h3>

            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="name-input"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="email-input"
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="subject-input"    
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    className="message-input"
                ></textarea>
            </form>
        </section>
    );
};

export default Contact;