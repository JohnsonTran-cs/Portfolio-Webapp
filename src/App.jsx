import { useRef } from "react";
import Navbar from "./components/NavBar";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./components/components.css"
import "./App.css";

export default function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar 
        sections={{
          about: aboutRef,
          projects: projectsRef,
          contact: contactRef
        }}
      />

      <Profile />

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={projectsRef}>
        <Projects />
      </section>

      <section ref={contactRef}>
        <Contact />
      </section>
    </>
  );
}