const Contact = () => {
    return (

        <section className="contact-section" id="contact">
            <h3 className="section-title">Contact</h3>

            <form>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="name-input"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="email-input"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="subject-input"
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="message-input"
                    >
                    </textarea>
                </div>
                <div className="form-control-panel">
                    <button type="button" onClick={() => alert("Submit")}>Submit</button>
                    <button type="button" onClick={() => alert("Cancel")}>Cancel</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;