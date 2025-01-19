import Home from "../subcomponents/Home";
import About from "../subcomponents/About";
import Projects from "../subcomponents/Projects";
import Skills from "../subcomponents/Skills";
import ContactMe from "../subcomponents/ContactMe";

const Main = () => {
    return (
        <main>
            <Home />
            <About />
            <Projects />
            <Skills />
            <ContactMe />
        </main>
    );
};

export default Main;