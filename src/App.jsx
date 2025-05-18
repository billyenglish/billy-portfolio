import React from "react";
import { AnimatedBackground } from 'animated-backgrounds';
import './App.css'
import './media_queries/small_screen.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <AnimatedBackground
        animationName="matrixRain"
        blendMode="soft-light"
      />
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
