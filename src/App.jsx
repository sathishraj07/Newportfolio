
import Navbar from "./Component/Navbar";
import About from "./Sections/About/About";
import Contact from "./Sections/ContactForm/Contact";
import Experience from "./Sections/Experience/Experience";
import Footer from "./Sections/Footer/Footer";
import Intro from "./Sections/Intro/Intro"
import Links from "./Sections/Links/Links";
import Projects from "./Sections/Project/Project";
import Skills from "./Sections/Skill/Skill";
import "./styles/global.scss";


function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
       <About />
      <Skills />
      <Experience/>
     <Projects />
     <Links/>
       <Contact/> 
       <Footer/>
    </>
  );
}

export default App;
