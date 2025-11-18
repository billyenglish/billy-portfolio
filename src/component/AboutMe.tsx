import Nav from "./Nav";
import Footer from "./Footer";

const AboutMe = () => {
    
    return (
        <>
            <Nav />
            <section id="about_me_section"
                className="section_content">
                <h3 className="section_title">
                    About Me
                </h3>
            </section>
            <Footer />
        </>
    );
};

export default AboutMe;