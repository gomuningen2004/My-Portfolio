import About from "./components/About";
import Contact from "./components/Contact";
import EducationTimeline from "./components/EducationTimeline";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <EducationTimeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
