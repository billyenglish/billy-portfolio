import { Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
import AboutMe from "./component/AboutMe";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import ContactMe from "./component/ContactMe";

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about_me" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact_me" element={<ContactMe />} />
      </Routes>
    </>
  );
};

export default App
