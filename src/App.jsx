
import { useEffect } from "react";
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
import 'aos/dist/aos.css';
import Aos from "aos";
import "react-toastify/dist/ReactToastify.css";


function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: true,     // run animation only once
      offset: 100,    // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <>
      <Navbar/>
      <Intro/>
       <About />
      <Skills />
      <Experience/>
     <Projects />
     <div data-aos="fade-up">
   <Links/>
       <Contact/> 
     </div>
  
       <Footer/>
    </>
  );
}

export default App;
