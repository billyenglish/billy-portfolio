import Nav from "./Nav";
import Footer from "./Footer";
import "../assets/styles/contact_me.css";
import "../assets/media_queries/contact_query.css"
import Button from "../subcomponent/Button";

const ContactMe = () => {

    return (
        <>
            <Nav />
            <section id="contact_me_section" className="main_section">
                <h3 className="section_title contact_title">Contact Me</h3>

                <div id="form_container">
                    <div>
                        <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="subject_title"
                            id="subject_title"
                            placeholder="Subject Title"
                        />
                    </div>
                    <div>
                        <textarea placeholder="Details">
                        </textarea>
                    </div>
                    <div className="form_control_panel">
                        <Button
                            text="Clear"
                            className="form_button"
                        />
                        <Button
                            text="Submit"
                            className="form_button"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ContactMe;