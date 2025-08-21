import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SectionDiv from "./components/SectionDiv";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

function App() {
  return (
    <main className="w-full md:w-5/6 md:mx-auto ">
      <Navbar />
      <Hero />
      <SectionDiv title="About me" id="about" />
      <About />
      <SectionDiv
        title="Skills"
        id="skills"
        description="The skills, tools and technologies I am really good at:"
      />
      <Skills />
      <SectionDiv
        title="Work"
        id="work"
        description="Some of the noteworthy projects I have built:"
      />
      <Work />
      <SectionDiv
        title="Testimonials"
        id="testimonials"
        description="Nice things people said about me:"
      />
      <Testimonials />
      <SectionDiv
        title="Get in touch"
        id="contact"
        description="Feel free to reach out for any development projects or collaborations."
      />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
